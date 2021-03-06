import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service'; 
import { NavbarService } from '../navbar/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  /*
   *         / Type - Core
   *        /----------/
   * Service - Type - Core
   *    \\  \----------/
   *     \\--------\
   *      \ Type - Core
   * 
   * - Service stores TypeModals & its CoreComponent
   * - Core stores same type instances
   * 
   * RULES:
   *  - You can concat different types:
   *    Ex: default, default, extended
   * 
   *  - You cannot intercalate different types:
   *    Ex: default, extended, default
  */
  private _responses = [];
  private _modals = {};
  private _actives = {
    list: [],
    getCurrent: function() { return this.list[this.list.length-1] }
  }; // Store only type name

  constructor(
    private locationService: LocationService,
    private navbarService: NavbarService
  ) {
  }

  /**
   * 
   * CLIENT CONTROLS
   * 
   */
  // open(type, content, params?, location?, menu?) {
  open(modal: {type:string, content:any, params?:any, keepOpened?:boolean},
       location: {action:string, stack?:Array<string>, remove?:number}, responseCb?) {
    /*
        Check actives:
          -empty:                            (3)loadContent, (4)displayNew
          - same:            (2)saveContent, (3)loadContent
          - diff: (1)hideOld,                (3)loadContent, (4)displayNew

        Before step 3, save location state
        Current modal becomes old
        Requested modal becomes new
     */

    const oldType = this._actives.getCurrent();
    const oldModal = this._modals[oldType];
    const newModal = this._modals[modal.type];

    // (1) Hide old - { different }
    if (!modal.keepOpened && oldType && oldType !== modal.type) {
      // oldModal.wrapper.display = false;
      oldModal.wrapper.hideModal();
    }

    // (2) Save old content - { same }
    if (oldType === modal.type) {
      oldModal.core.saveState();
    }

    // (*3) Save current location before loading new modal
    this.locationService.saveState();
    this.locationService.changeStackByAction(location);
    // (*3) Save navbar menu sate
    this.navbarService.saveState();


    // (3) Load new content & set as active - { empty, same, different }
    newModal.core.loadContent(modal.content);
    this._actives.list.push(modal.type);

    // (4) Display wrapper- { empty, different }
    if (!oldType || oldType !== modal.type) {
      // Assign params
      newModal.wrapper = Object.assign(newModal.wrapper, modal.params);

      // newModal.wrapper.display = true;
      newModal.wrapper.displayModal();
    }

    // Save callback fn that will be used on emitResponse
    this._responses.push(responseCb);
  }

  changeComponent(componentName) {
    const type = this._actives.getCurrent();
    const modal = this._modals[type];
    modal.core.changeComponent(componentName);
  }

  emitResponse(end, res=null) {
    // If no modal opened then return
    if (this._actives.list.length === 0) return;

    if (!end) {
      const currentType = this._actives.getCurrent()
      const currentModal = this._modals[currentType];
      currentModal.wrapper.hideModal();

      // Display if previous modal exists
      const previousType = this._actives.list[this._actives.list.length-2];
      if (previousType) {
        const previousModal = this._modals[previousType];
        previousModal.wrapper.displayModal();
      }
    }

    // Check if response callback fn was given
    const fn = this._responses[this._responses.length-1];
    // If there is res cb fn and respose, run it
    if (fn && res !== null) fn(res);
    // If it is last emit, then close modal
    if (end) {
      const type = this._actives.getCurrent()
      const modal = this._modals[type];
      modal.core.onClose();
    }
  }

  forceClose(count=1) {
    // Count == 0 -> all list
    const typesList = count === 0 ?
      this._actives.list :
      this._actives.list
        .slice(this._actives.list.length-count)
        .reverse() ;
    // Important to use a copy, because we are working with a
    // property that after the first iteration will be modified
    for (const type of [...typesList]) {
      // If nothing to close, return
      if (!type) return;

      // Trigger onClose()
      // Once the core is clear, it will trigger close()
      // from this service
      const modal = this._modals[type];
      modal.core.onClose();
    }
  }

  closeByType(type) {
    
    if (!this._actives.list.includes(type)) return;
    const modal = this._modals[type];
    modal.core.onClose();
  }




  /**
   * 
   * TYPEcomponent CONTROLS
   * 
   */
  initType(type, component) {
    this._modals[type] = { 
      name: type,
      wrapper: component
    };
  }
  // changeContent(newContent, index?) {
  //   const currentType = this._actives.getCurrent();
  //   if (!currentType) return;

  //   console.log(currentType);

  //   this._modals[currentType].core.changeContent(newContent, index);
  // }




  /**
   * 
   * COREcomponent CONTROLS
   * 
   */
  initCore(parentType, coreComponent) {
    this._modals[parentType]['core'] = coreComponent;
  }

  close(type) {
    // If nothing to close, return
    if (!type) return;

    // Remove response callback
    this._responses.pop();

    // Restore location & menu
    this.locationService.restoreState();
    this.navbarService.restoreState();

    this._actives.list.pop();
    this._responses.pop();

    const previousType = this._actives.getCurrent();
    const previousModal = this._modals[previousType];
    const currentModal = this._modals[type];

    if (!previousType) {
      // currentModal.wrapper.display = false;
      currentModal.wrapper.hideModal();
    }
    else if (previousType === type) {
      previousModal.core.restoreState();
    }
    else if (previousType !== type) {
      // currentModal.wrapper.display = false;
      currentModal.wrapper.hideModal();
      // previousModal.wrapper.display = true;
      previousModal.wrapper.displayModal();
    }
  }

}
