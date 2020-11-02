import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navcomponent;

  constructor() { }

  init(component) {
    this.navcomponent = component;
  }

  loadSubMenu(items) {
    this.navcomponent.loadSubMenu(items);
  }

  close() {
    this.navcomponent.restoreState();
  }

  closeSubMenu() {
    this.navcomponent.restoreState(false);
  }
}
