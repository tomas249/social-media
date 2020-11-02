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

@Component({
  selector: 'modal-core',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {
  @ViewChild('content',  { read: ViewContainerRef }) content: ViewContainerRef;

  activeModule;
  componentFct;
  componentRef;
  componentName;

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

  @Input() mParams;
  @Input() mContent;
  @Input() mType;
  @Input() mId;

  private _states = [];
  loaded = false;

  constructor(
    private modalService: ModalService,
    private resolver: ComponentFactoryResolver,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.modalService.addFactory(this.mType, this);
    // const content = this.mContent[0]
    // this.loadModule(content.module, content.component); 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.mContent && !changes.mContent.firstChange) {

      const statesLen = this._states.length;
      const mId = changes.mId?.currentValue || this.mId;

      // Store data
      if (statesLen < mId) {
        console.log('store')

        const currentVar = {
          activeModule: this.activeModule,
          componentFct: this.componentFct,
          componentRef: this.componentRef,
          componentName: this.componentName,
          mContent: changes.mContent.previousValue
        };
        console.log(currentVar.mContent)
        console.warn(this.mContent)
        this.componentRef.destroy();
        this._states.push(Object.assign({}, currentVar));
      }

      // Load component
      if (statesLen <= mId) {
        console.log('load')

        const chngCurrentVal = changes.mContent.currentValue;
        const moduleIndex = chngCurrentVal.map(c => !!c.module).indexOf(true);

        const module = chngCurrentVal[moduleIndex].module;
        const component = chngCurrentVal[moduleIndex].component;

        this.loadModule(module, component, (loadedModule) => {
          this.addParams(this.mParams);
          const subMenuList = {
            name: loadedModule.list.root,
            children: loadedModule.list.children,
            selChildIdx: loadedModule.list.children.map(v => v.component).indexOf(component)
          }
          this.navbarService.loadSubMenu(subMenuList)
        });
      }

      // Restore data
      if (statesLen > mId) {
        console.log('restore')

        const oldData = this._states[mId];

        this.activeModule = oldData.activeModule;
        // this.mContent = oldData.mContent;
        
        // this.changeComponent(oldData.componentName)
        // this.createComponent(oldData.componentFct);

        
        // Retrieve variables for component
        let obj1 = this.componentRef.instance;
        let obj2 = oldData.componentRef.instance;

        Object.keys(obj2).forEach(function(key) {
          if (key in obj1) {
            obj1[key] = obj2[key];
          }
        });
        this._states.pop();
      }
    }
  }

  changeMessage(index, newContent) {
    // Check if it is possible such change
    if (this.mContent.length <= index || typeof index === 'boolean') {
      this.mContent.push(newContent);
    }
    else if (this.mContent[index].component) {
      console.error('Cannot replace component content');
    }
    else if (this.mContent.length > index) {
      this.mContent[index] = newContent;
    }
    else {
      console.error('Invalid index');
    }
  }

  close() {
    // this.componentRef.destroy();
    // this.modalService.onClosed();
    // this.displayMessage = false;
    // this.navbarService.close();
    this.modalService.close(this.mType);
  }

  async loadModule(moduleName, componentName, cb) {
    const selectedModule = this._modules[moduleName];
    this.activeModule = await selectedModule.import();
    this.changeComponent(componentName);
    cb(this.activeModule);
  }

  changeComponent(componentName) {
    const newContent = this.mContent.map(el => {
      if (el.module && el.component !== componentName) {
        return {
          module: el.module,
          component: componentName
        }
      } else {
        return el;
      }
    });
    this.mContent = Object.assign(this.mContent, newContent);
    
    this.componentName = componentName;
    const component = this.activeModule.components[componentName];
    this.componentFct = this.resolver.resolveComponentFactory(component);
    this.createComponent(this.componentFct)
  }

  createComponent(componentFct) {
    this.content.remove();
    this.componentRef = this.content.createComponent(componentFct);
  }

  addParams(params) {
    Object.assign(this.componentRef.instance, params);
  }

}
