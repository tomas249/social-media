import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  tooltip;
  opened = false;

  constructor(
    private locationService: LocationService
  ) { }

  add(component) {
    this.tooltip = component;
  }

  async open(start, x, y, moduleName, componentName, params?) {
    if (this.opened) {
      // this.tooltip.changeCoord(x, y);
    } else {
      const finished = await this.init(moduleName, componentName, params);
      if (finished) this.tooltip.open(start, x, y);
    }
  }

  async init(moduleName, componentName, params?) {
    // this.locationService.fixLocation();
    const finished = await this.tooltip.loadModule(moduleName, componentName);
    if (!finished) return false;
    if (params) this.tooltip.addParams(params);
    this.opened = true;
    return true;
  }

  close(forceClose=false) {
    if (!this.opened) return;
    this.tooltip.close(forceClose);
  }

  onClosed() {
    // this.locationService.unfixLocation();
    this.opened = false;
  }
}
