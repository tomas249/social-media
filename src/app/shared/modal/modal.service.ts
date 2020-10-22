import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service'; 
import { Subject, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // private modal;
  // private opened = false;
  // response$;


  private _modals = {};

  constructor(
    private locationService: LocationService
  ) { }

  initiate(modalType, modal) {
    /*
        Only one initiate per type,
        otherwise create individual wrappers
    */
    this._modals[modalType] = {
      original: modal,
      states: [],
      originalCmpState: false,
      componentStates: [],
      getLast: function(){ return this.states[this.states.length-1] }
    }
  }

  open(modalType, index?, as?) {  // fix params
    const modal = this._modals[modalType];

    // Change id
    modal.original.mContent = index;
    modal.original.id = modal.states.length;

    // Display if first of its type
    if (modal.states.length === 0) {
      modal.original.display = true;
    }
    // Save state
    modal.states.push(Object.assign({}, modal.original));
  }

  close(modalType?) {  // remove ?
    const modal = this._modals[modalType];
    
    // Empty states means that any modal is opened
    if (modal.states.length === 0) return;

    // Remove last state
    modal.states.pop();
    // Recover previous state
    modal.original = Object.assign(modal.original, modal.getLast());

    // If last modal, hide it
    if (modal.states.length === 0) {
      modal.original.display = false;
    }
  }

  saveComponentState(modalType, modalId, componentState) {
    console.log('save', modalType, modalId)
    const modal = this._modals[modalType];
    modal.originalCmpState = componentState;
    modal.componentStates.push(componentState);
  }

  restoreComponentState(modalType, modalId) {
    console.log('restore', modalType, modalId)
    const modal = this._modals[modalType];
    modal.componentStates.pop();
    modal.originalCmpState = Object.assign(modal.originalCmpState,
                                           modal.componentStates[modalId]);
  }


  add(modal) {
    // this.modal = modal;
  }

  // async open(moduleName, componentName, params?) {
    // // this.locationService.freeze();
    // await this.modal.loadModule(moduleName, componentName);
    // if (params) this.modal.addParams(params);
    // this.modal.open();
    // this.opened = true;
  // }

  addMessage(message) {
    // this.modal.addMessage(message);
  }

  closse() {
    // if (!this.opened) return;
    // this.modal.close();
  }
  
  onClosed() {
    // // this.locationService.restore();
    // this.opened = false;
    // if (!this.response$) return;
    // this.response$.next(false);
    // this.response$.complete();
    // this.response$ = null;
  }

  change(component, extra) {
    // this.modal.changeComponent(component);
  }

  waitForResponse() {
    // this.response$ = new Subject();
    // return this.response$.asObservable(); 
  }

  emitResponse(res) {
    // if (!this.response$) return;
    // this.response$.next(res);
  }

}
