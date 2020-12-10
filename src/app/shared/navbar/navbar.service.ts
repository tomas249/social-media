import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navcomponent;

  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  init(component) {
    this.navcomponent = component;
  }

  loadMenu(menu, current) {
    if (!menu.trigger.includes(current.component)) return;

    const idx = menu.children.map(c => c.component).indexOf(current.component);
    this.navcomponent.loadCustomMenu(menu.children, idx);

    // Append to location
    this.locationService.addItemToStack(menu.children[idx].name);
  }

  saveState() {
    this.navcomponent.saveState();
  }

  restoreState() {
    this.navcomponent.restoreState();
  }

  go(path) {
    // Navigate
    this.router.navigate([path]);
    const url = this.navcomponent.detectUrl(path);
    // Change selected navbar item and load menu list
    this.navcomponent.changeItem(url);
    // Change location
    this.locationService.setStack(this.navcomponent.getPathNames(url));
  }

}
