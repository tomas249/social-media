import { Component, OnInit, ViewChild, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from './modal.service';
import { NavbarService } from '../navbar/navbar.service';
import { moduleList } from './module-list'

@Component({
  selector: 'modal-core',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('contentCmp',  { read: ViewContainerRef }) contentCmp: ViewContainerRef;
  @Input('type') parentType;

  loading = false;

  content = {begin: [], end: []};
  private _components;
  private _componentRef;

  private _states = [];

  private _closeIsRequested = false;
  private _closeWasRequested = false;

  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.modalService.initCore(this.parentType, this);
  }

  onClose() {
    // If close is requested while loading a module, then request
    // service to hide modal and finish loading in background
    if (this.loading) {
      this._closeIsRequested = true;
      this._closeWasRequested = true;
      this.modalService.close(this.parentType);
      return;
    }

    if (this._componentRef) {
      this._componentRef.destroy();
      this._componentRef = null;
    }
    if (this.contentCmp) {
      this.contentCmp.clear()
    }
    this.content = {begin: [], end: []};

    // Check if modal is already hidden
    if (this._closeWasRequested) {
      this._closeWasRequested = false;
    } else {
      this.modalService.close(this.parentType);
    }
  }

  loadContent(content) {
    // If content requires a component, means that there is a possible async load.
    let asyncLoad;
    let mContent = {begin: [], end: []};
    content.forEach(c => {
      if ('component' in c) {
        asyncLoad = c;
      }
      else if (!asyncLoad) {
        mContent['begin'].push(c);
      }
      else { 
        mContent['end'].push(c);
      }
    });

    // Load component or not
    if (asyncLoad) {
      this.loading = true;
      this.content = mContent;

      this.loadModule(asyncLoad.module, (module) => {
        // Once we have module, check for menu items
        if (module.menu) {
          // Send this menu and current component to navbar service
          this.navbarService.loadMenu(module.menu, asyncLoad);
        }
        const componentFct = this.resolveComponent(module.components, asyncLoad.component);
        this._componentRef = this.contentCmp.createComponent(componentFct);
        Object.assign(this._componentRef.instance, asyncLoad.params);

        // Save access to components
        this._components = module.components;
      });
    }
    else {
      this.content = mContent;
    }
  }

  saveState() {
    let currentState = {
      content: this.content
    };
    if (this.contentCmp) {
      currentState['components'] = this._components;
      currentState['view'] = this.contentCmp.detach();
      // Important to clear this property because otherwise
      // if new modal is opened with no components, both modals will
      // reference the same one
      this._componentRef = null;
    }
    this._states.push(currentState);
  }

  restoreState() {
    const oldData = this._states[this._states.length -1];
    this.content = oldData.content;
    if (oldData.view) {
      this.contentCmp.insert(oldData.view);
      this._components = oldData.components;
    }
    this._states.pop();
  }

  private async loadModule(moduleName, cb) {
    moduleName = moduleName + 'Module';
    const module = await moduleList[moduleName].import();
    this.loading = false;

    // After loading module, check if this modal is still requested
    if (this._closeIsRequested) {
      this._closeIsRequested = false;
      this.onClose();
    } else {
      // Otherwise run callback
      cb(module);
    }
  }

  private resolveComponent(components, componentName) {
    componentName = componentName + 'Component';
    const component = components[componentName];
    return this.resolver.resolveComponentFactory(component);
  }

  changeComponent(componentName) {
    const componentFct = this.resolveComponent(this._components, componentName);
    this.contentCmp.clear();
    this._componentRef = this.contentCmp.createComponent(componentFct);
  }

  onButtonEmit(close, event) {
    this.modalService.emitResponse(close, event);
  }

  

}
