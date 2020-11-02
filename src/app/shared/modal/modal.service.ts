import { Injectable } from '@angular/core';
import { LocationService } from 'src/app/services/location.service'; 
import { BehaviorSubject, Subject, zip } from 'rxjs';
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
   * CLIENT CONTROLS
   * 
   */
  open(type, content, params?) {
    /*
        Check actives:
          -empty:                            (3)loadContent, (4)displayNew
          - same:            (2)saveContent, (3)loadContent
          - diff: (1)hideOld,                (3)loadContent, (4)displayNew

        Current modal becomes old
        Requested modal becomes new
     */

    const oldType = this._actives.getCurrent();
    const oldModal = this._modals[oldType];
    const newModal = this._modals[type];

    // (1) Hide old - { different }
    if (oldType && oldType !== type) {
      oldModal.wrapper.display = false;
    }

    // (2) Save old content - { same }
    if (oldType === type) {
      oldModal.core.saveState();
    }

    // (3) Load new content & set as active - { empty, same, different }
    newModal.core.loadContent(content, params);
    this._actives.list.push(type);

    // (4) Display wrapper- { empty, different }
    if (!oldType || oldType !== type) {
      newModal.wrapper.display = true;
    }
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
    this._actives.list.pop();

    const previousType = this._actives.getCurrent()
    const currentModal = this._modals[type];
    const previousModal = this._modals[previousType];

    if (!previousType) {
      currentModal.wrapper.display = false;
    }
    else if (previousType === type) {
      previousModal.core.restoreState();
    }
    else if (previousType !== type) {
      currentModal.wrapper.display = false;
      previousModal.wrapper.display = true;
    }
  }




}
