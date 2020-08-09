import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service'; 
import { Subject, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal;
  private opened = false;
  response$;

  constructor(
    private locationService: LocationService
  ) { }

  add(modal) {
    this.modal = modal;
  }

  async open(moduleName, componentName, params?) {
    this.locationService.freeze();
    await this.modal.loadModule(moduleName, componentName);
    if (params) this.modal.addParams(params);
    this.modal.open();
    this.opened = true;
  }

  addMessage(message) {
    this.modal.addMessage(message);
  }

  close() {
    if (!this.opened) return;
    this.modal.close();
  }
  
  onClosed() {
    this.locationService.restore();
    this.opened = false;
    if (!this.response$) return;
    this.response$.next(false);
    this.response$.complete();
    this.response$ = null;
  }

  change(component, extra) {
    this.modal.changeComponent(component);
  }

  waitForResponse() {
    this.response$ = new Subject();
    return this.response$.asObservable(); 
  }

  emitResponse(res) {
    if (!this.response$) return;
    this.response$.next(res);
  }

}
