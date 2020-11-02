import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service'; 
import { BehaviorSubject, Subject, zip } from 'rxjs';
import { NavbarService } from '../navbar/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // private modal;
  // private opened = false;
  // response$;


  private _activeModals = {
    types: [],
    getActive: function() { return this.types[this.types.length-1] }
  };
  private _modals = {};
  private _sub = new BehaviorSubject(this._modals);

  constructor(
    private locationService: LocationService,
    private navbarService: NavbarService
  ) {
  }

  initiate(modalType, modal) {
    /*
        Only one init per type,
        otherwise create individual wrappers
    */
    this._modals[modalType] = {
      original: modal,
      states: [],
      originalCmpState: false,
      componentStates: [],
      getLast: function(){ return this.states[this.states.length-1] }
    }
    this._sub.next({...this._modals});
  }

  addFactory(modalType, factory) {
    this._modals[modalType]['factory'] = factory;
  }

  open(modalType, content, as?) {  // fix params
    
    // Check if different modal type is active
    const activeModalType = this._activeModals.getActive();
    if (activeModalType && modalType !== activeModalType ) {
      this._modals[activeModalType].original.display = false;
    }
    this._sub.next({...this._modals});

    // Open modal
    const modal = this._modals[modalType];

    // // Change id
    modal.original.mContent = content;
    modal.original.id = modal.states.length;


    this._sub.next({...this._modals});
    

    // Display if it is first of its type
    if (modal.states.length === 0) {
      modal.original.display = true;
      // Set as active type
      this._activeModals.types.push(modalType);
    }
    this._sub.next({...this._modals});

    // Save state
    modal.states.push(Object.assign({}, modal.original));
    // modal.states.push({ ...modal.original });
    // modal.states.push(modal.original);
    this._sub.next({...this._modals});

  }

  close(modalType?) {  // remove "?""
    const modal = this._modals[modalType];
    
    // Empty states means that all modals are closed
    if (modal.states.length === 0) return;

    // Remove current state
    modal.states.pop();

    // Recover previous state
    modal.original = Object.assign(modal.original, modal.getLast());

    // If different modal type exists, hide it
    if (modal.states.length === 0) {
      modal.original.display = false;
      // Remove current modal & display previous one
      this._activeModals.types.pop();
      const activeModalType = this._activeModals.getActive();
      // Only if previous one exists
      if (activeModalType) {
        this._modals[activeModalType].original.display = true;
      }
      this.navbarService.closeSubMenu();
    }
    else {
      this.navbarService.close();
    }
  }

  changeComponent(modalType, component) {
    this._modals[modalType].factory.changeComponent(component);
  }

  changeContentMssg(modalType, index, newContent) {
    this._modals[modalType].factory.changeMessage(index, newContent);
  }

  saveComponentState(modalType, modalId, componentState) {
    const modal = this._modals[modalType];
    modal.originalCmpState = componentState;
    modal.componentStates.push(componentState);
  }

  restoreComponentState(modalType, modalId) {
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
