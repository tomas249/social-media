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

  loadMenu(menu, current?) {
    // Check if menu has components or paths
    let idx;
    let locStack = [];
    if (current) {
      if (!menu.trigger.includes(current.component)) return;
      idx = menu.children.map(c => c.component).indexOf(current.component);
    }
    else {
      idx = menu.selChildIdx;
      // If root name provided, use it do define root location
      if (menu.name) {
        locStack.push(menu.name);
      }
    }

    this.navcomponent.loadCustomMenu(menu.children, idx);

    // Set location only if it is not a reactivation
    if (menu.activated) {
      locStack.push(menu.children[idx].name)
      this.locationService.setStack(locStack);
      // this.locationService.addItemToStack(locStack);
    }

  }

  changeMenuItem(menuItemIdx) {
    this.navcomponent.changeMenuItem(menuItemIdx);
  }

  saveState() {
    this.navcomponent.saveState();
  }

  restoreState() {
    this.navcomponent.restoreState();
  }

  compareAndSelect(route, skipMenu=false) {
    this.navcomponent.simulation = true;

    const url = this.navcomponent.detectUrl(route);
    this.navcomponent.changeItem(url, skipMenu);
  }

  go(path, skipMenu=false) {
    // Navigate
    this.router.navigate([path]);
    const url = this.navcomponent.detectUrl(path);
    // Change selected navbar item and load menu list

    this.navcomponent.changeItem(url, skipMenu);
    // Change location
    this.locationService.setStack(this.navcomponent.getPathNames(url));
  }

}
