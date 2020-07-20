import { Component, OnInit, ViewChild, Input, HostListener, ElementRef, ContentChild, ViewContainerRef, ComponentFactoryResolver, NgModuleFactoryLoader, Injector, Compiler, ComponentFactory, Type
, ɵcreateInjector as createInjector, 
ComponentRef} from '@angular/core';
import { ModalService } from './modal.service';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { LocationService } from 'src/app/services/location.service';
import { LoadChildren } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'modal-placeholder',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContainer') modalContainer: ElementRef;
  @ViewChild('contentWrapper') content: ElementRef;

  @ViewChild('secondaryData',  { read: ViewContainerRef }) data: ViewContainerRef;

  displayModal = false;
  selectedModule;
  activeModule;
  componentLoad;
  
  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
    private locationService: LocationService,
  ) { }

  ngOnInit(): void {
    this.modalService.add(this);
  }

  // Close when clicking outside modal
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (event.target === this.modalContainer.nativeElement) {
      this.close();
    }
  }

  public open() {
    this.displayModal = true;
  }

  compRef;
  public close() {
    // this.componentLoad.destroy();
    this.displayModal = false;
    this.compRef.destroy();
    this.modalService.onClosed();
    // this.contentData?.reset();
    // this.ref.destroy();
    this.content.nativeElement.innerHTML = '';
  }
  
  private addContent(content) {
    // this.content.nativeElement.innerHTML = content;
    const temp = `<p>In order to reply, please auth yourself</p>`;
    const temp2 = `<h4>This is secondary warning</h4>`;
    this.content.nativeElement.insertAdjacentHTML('afterbegin', temp);
  }




  async loadModule(moduleName, activeComponent) {
    this.addContent('s');
    this.selectedModule = this.module[moduleName];
    this.activeModule = await this.selectedModule.import();
    // this.componentLoad = this.activeModule.components[activeComponent];
    const comp = this.activeModule.components[activeComponent];
    const compFct = this.resolver.resolveComponentFactory(comp);
    this.compRef = this.data.createComponent(compFct);

    // this.locationService.changeNavItems('Auth', this.selectedModule.navItems);
    // return {
    //   ok: (component) => {
    //     console.log(component)
    //     this.loadData = this.activeModule.components[component]
    //     console.log(this.loadData)
    //   }  
    // };
    return { change: component => 
      this.componentLoad = this.activeModule.components[component] };
  }


  module = {
    AuthModule: {
      import: async () => (await import('src/app/modules/auth/auth.module')).AuthModule
    },
    PostsModule: {
      import: async () => (await import('src/app/modules/posts/posts.module')).PostsModule
    }
  };

  changeComponent(componentName) {
    this.componentLoad = this.activeModule.components[componentName];
  }



  // public reset() {
  // }

  // emitContentAndOpen(content) {
  //   this.addContent(content);
  //   this.open();
  // }

  // emitParamsAndOpen(params) {
  //   this.contentData.refreshData(params);
  //   this.open();
  // }
  
  // addEditor(component) {
  //   const factory = this.componentFactoryResolver.resolveComponentFactory(component);
  //   console.log(factory)
  //   this.ref = this.viewContainerRef.createComponent(factory);
  //   console.log(this.ref)
  //   this.ref.instance.showTabs = true;
  //   // ref.changeDetectorRef.detectChanges();
  // }




  // // TESTING

  // componentFactories: ComponentFactory<any>[];

  // loadData;
  // activeModule;
  // selectedModule;






}
