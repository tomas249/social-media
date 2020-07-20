import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service'; 

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal;
  public changeFn;

  constructor(
    private locationService: LocationService
  ) { }

  add(modal) {
    this.modal = modal;
  }

  async open(moduleName, componentName) {
    this.locationService.freeze();
    this.modal.open();
    this.changeFn = await this.modal.loadModule(moduleName, componentName);
  }

  onClosed() {
    this.locationService.restore();
  }

  change(component) {
    console.log(this.changeFn);
    this.changeFn.change(component);
  }

  // close(name) {
  //   const modal = this.find(name);
  //   modal.close();
  // }

  // emitContentAndOpen(name, content) {
  //   const modal = this.find(name);
  //   modal.emitContentAndOpen(content);
  //   modal.open();
  // }

  // emitParamsAndOpen(name, params) {
  //   const modal = this.find(name);
  //   modal.emitParamsAndOpen(params);
  //   modal.open(params);
  // }

  // loadComp(name, component) {
  //   const modal = this.find(name);
  //   modal.addEditor(component);    
  //   modal.open();
  // }

}
