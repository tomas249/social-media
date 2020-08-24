import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, HostListener, OnChanges } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @ViewChild('tooltipContainer') tooltipContainer: ElementRef;
  @ViewChild('content',  { read: ViewContainerRef }) content: ViewContainerRef;

  load = false;

  selectedModule;
  activeModule;
  componentRef;

  display = false;
  y = 0;
  x = 0;

  offset_X = 0;
  offset_Y = 10;

  mouseInside = false;
  closeEmitted = false;

  finishedLoad = false;

  wS = 0;
  hS = 0;
  xS = 0;
  yS = 0;

  module = {
    AuthModule: {
      import: async () => (await import('src/app/modules/auth/auth.module')).AuthModule
    },
    PostsModule: {
      import: async () => (await import('src/app/modules/posts/posts.module')).PostsModule
    },
    ProfileModule: {
      import: async () => (await import('src/app/modules/profile/profile.module')).ProfileModule
    }
  };

  constructor(
    private tooltipService: TooltipService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.tooltipService.add(this);
  }
  
  maxH = 0;
  open(start, x, y) {
    this.display = true;
    const a = this.tooltipContainer.nativeElement.getBoundingClientRect();
    this.maxH = start;
    this.offset_X = -a.width / 2;
    this.x = x + this.offset_X;
    this.y = y + this.offset_Y;

   
    this.wS = a.width;
    this.hS = this.y - start + this.offset_Y + 30;
    this.xS = this.x;
    this.yS = start - this.offset_Y;
    // console.warn(a)
    // console.log(this.wS, this.hS, this.xS, this.yS)
    this.mouseInside = true;
  }

  onExit(event) {
    if (event.y < this.maxH || event.x < this.xS ||
        event.x >= Math.floor(this.xS + this.wS)) {
      this.mouseInside = false;
      this.close();
    }
  }

  onMouseEnter() {
    this.mouseInside = true;
  }

  onMouseLeave() {
    this.mouseInside = false;
    if (this.closeEmitted) {
      this.close();
    }
  }

  close(forceClose=false) {
    if ((this.mouseInside || !this.finishedLoad) && !forceClose) {
      this.closeEmitted = true;
      return;
    };

    if (this.finishedLoad) {
      this.componentRef.destroy();
      this.display = false;
      this.load = false;
    }
    this.closeEmitted = false;
    this.finishedLoad = false;
    this.tooltipService.onClosed();
  }

  async loadModule(moduleName, componentName) {
    this.selectedModule = this.module[moduleName];
    this.activeModule = await this.selectedModule.import();
    if (this.closeEmitted) { this.close(); return false; }
    this.load = true;
    this.changeComponent(componentName);
    return true;
  }

  changeComponent(componentName) {
    this.content.remove();
    const component = this.activeModule.components[componentName];
    const componentFct = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.content.createComponent(componentFct);
    this.finishedLoad = true;
  }

  addParams(params) {
    Object.assign(this.componentRef.instance, params);
  }

}
