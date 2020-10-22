import { Component, OnInit, ViewChild, Input, HostListener, ElementRef, ViewContainerRef, ComponentFactoryResolver, 
OnChanges,
SimpleChanges,
Output,
TemplateRef} from '@angular/core';
import { ModalService } from './modal.service';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { LocationService } from 'src/app/services/location.service';
import { LoadChildren } from '@angular/router';
import { Observable } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'modal-core',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {
  @ViewChild('modalContainer') modalContainer: ElementRef;
  @ViewChild('message') message: ElementRef;
  @ViewChild('content',  { read: ViewContainerRef }) content: ViewContainerRef;

  displayMessage = false;
  selectedModule;
  activeModule;
  componentFct;
  componentRef;

  private _modules = {
    AuthModule: {
      import: async () => (await import('src/app/modules/auth/auth.module')).AuthModule
    },
    PostsModule: {
      import: async () => (await import('src/app/modules/posts/posts.module')).PostsModule
    },
    ProfileModule: {
      import: async () => (await import('src/app/modules/profile/profile.module')).ProfileModule
    },
    DashboardModule: {
      import: async () => (await import('src/app/modules/dashboard/dashboard.module')).DashboardModule
    }
  };

  @Input() mContent;
  @Input() mType;
  @Input() mId;

  private _states = [];
  loaded = false;
  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    // const content = this.mContent[0]
    // this.loadModule(content.module, content.component); 
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.mContent && !changes.mContent.firstChange && !this.loaded) {

      const statesLen = this._states.length;
      const mId = changes.mId?.currentValue || this.mId;

      // Store data
      if (statesLen < mId) {
        const currentVar = {
          selectedModule: this.selectedModule,
          activeModule: this.activeModule,
          componentFct: this.componentFct,
          componentRef: this.componentRef
        };
        this._states.push(Object.assign({}, currentVar));
      }

      // Load component
      if (statesLen <= mId) {
        const module = changes.mContent.currentValue[0].module;
        const component = changes.mContent.currentValue[0].component;
        this.loadModule(module, component);
      }

      // Restore data
      if (statesLen > mId) {
        const oldData = this._states[mId];
        this.selectedModule = oldData.selectedModule;
        this.activeModule = oldData.activeModule;
        this.createComponent(oldData.componentFct);

        this._states.pop();

        // Retrieve variables for component
        let obj1 = this.componentRef.instance;
        let obj2 = oldData.componentRef.instance;
        Object.keys(obj2).forEach(function(key) {
          if (typeof key !== 'object' || key === null) {
            if (key in obj1) {
              obj1[key] = obj2[key];
            }
          }
        });
      }
    }
  }

  // Close when clicking outside modal
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   if (event.target === this.modalContainer.nativeElement) {
  //     this.close();
  //   }
  // }

  open() {
    // this.displayModal = true;
  }

  // close() {
  //   this.displayModal = false;
  //   this.componentRef.destroy();
  //   this.modalService.onClosed();
  //   this.displayMessage = false;
  //   this.message.nativeElement.innerHTML = '<hr>';
  // }
  close() {
    this.modalService.close(this.mType);
  }
  
  addMessage(message) {
    // const tag = document.createElement('h3');
    // const content = document.createTextNode(message);
    // tag.append(content);
    // const template = `${tag}`;
    // console.log(template)
    const style = 'style="padding: 0 2rem"'
    this.message.nativeElement.insertAdjacentHTML('afterbegin', `<div ${style}>${message}</div>`);
    this.displayMessage = true;
  }

  async loadModule(moduleName, componentName) {
    this.selectedModule = this._modules[moduleName];
    this.activeModule = await this.selectedModule.import();
    this.changeComponent(componentName);
  }

  changeComponent(componentName) {
    this.content.remove();
    const component = this.activeModule.components[componentName];
    this.componentFct = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.content.createComponent(this.componentFct);
  }

  createComponent(componentFct) {
    this.content.remove();
    this.componentRef = this.content.createComponent(componentFct);
  }

  addParams(params) {
    Object.assign(this.componentRef.instance, params);
  }

}
