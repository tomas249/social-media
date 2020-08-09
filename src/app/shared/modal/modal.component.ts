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
  @ViewChild('message') message: ElementRef;
  @ViewChild('content',  { read: ViewContainerRef }) content: ViewContainerRef;

  displayModal = false;
  displayMessage = false;
  selectedModule;
  activeModule;
  componentRef;

  module = {
    AuthModule: {
      import: async () => (await import('src/app/modules/auth/auth.module')).AuthModule
    },
    PostsModule: {
      import: async () => (await import('src/app/modules/posts/posts.module')).PostsModule
    }
  };
  
  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver
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

  open() {
    this.displayModal = true;
  }

  close() {
    this.displayModal = false;
    this.componentRef.destroy();
    this.modalService.onClosed();
    this.displayMessage = false;
    this.message.nativeElement.innerHTML = '<hr>';
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
    this.selectedModule = this.module[moduleName];
    this.activeModule = await this.selectedModule.import();
    this.changeComponent(componentName);
  }

  changeComponent(componentName) {
    this.content.remove();
    const component = this.activeModule.components[componentName];
    const componentFct = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.content.createComponent(componentFct);
  }

  addParams(params) {
    Object.assign(this.componentRef.instance, params);
  }

}
