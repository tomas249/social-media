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

  componentRef;

  private _states = [];

  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.modalService.initCore(this.parentType, this);
  }

  onClose() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    if (this.contentCmp) {
      this.contentCmp.clear()
    }
    this.loading = false;
    this.content = {begin: [], end: []};
    this.modalService.close(this.parentType);
  }

  loadContent(content, params?) {
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

    if (asyncLoad) {
      this.loading = true;
      this.content = mContent;

      this.loadModule(asyncLoad.module, (module) => {
        const componentFct = this.resolveComponent(module, asyncLoad.component);
        this.componentRef = this.contentCmp.createComponent(componentFct);
        Object.assign(this.componentRef.instance, params);
        this.loading = false;
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
      currentState['view'] = this.contentCmp.detach();
    }
    this._states.push(currentState);
  }

  restoreState() {
    const oldData = this._states[this._states.length -1];
    this.content = oldData.content;
    if (oldData.view) {
      this.contentCmp.insert(oldData.view);
    }
    this._states.pop();
  }

  private async loadModule(moduleName, cb) {
    moduleName = moduleName + 'Module';
    const module = await moduleList[moduleName].import();
    cb(module);
  }

  private resolveComponent(module, componentName) {
    componentName = componentName + 'Component';
    const component = module.components[componentName];
    return this.resolver.resolveComponentFactory(component);
  }

  // changeContent(newContent, index?) {
  //   // Check if it is possible such change
  //   let i;
  //   if (!index && typeof index !== 'number') {
  //     this.content.push(newContent);
  //     return;
  //   }
  //   else if (index === 'replace-last') {
  //     i = this.content.length -1;
  //   }
  //   else if (index === 'replace-all') {
  //     this.content = [];
  //     this.content.push(newContent);
  //     return;
  //   }
  //   else if (this.content.length > index) {
  //     i = index;
  //   }
  //   else if (this.content.length <= index) {
  //     this.content.push(newContent);
  //     return;
  //   }
  //   else {
  //     console.error('Invalid index');
  //   }
  //   this.content[i] = newContent;
  // }

}
