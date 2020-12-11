import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../modal/modal.service';
import { navbarList } from './navbar-list';
import { NavbarService } from './navbar.service';
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _states = [];
  private _allUrls: [string, number, number][] = [];

  // Navbar items
  navbarList;
  selNavbarItemIdx: number = -1;

  // Menu items
  menuList;
  selMenuItemIdx: number = -1;

  constructor(
    private navbarService: NavbarService,
    private tokenService: TokenService,
    private locationService: LocationService,
    private modalService: ModalService,
    private router: Router,
    location: PlatformLocation
  ) {
    this.navbarList = navbarList(this.tokenService);
    // When going back, update navbar
    location.onPopState(() => {
      this.loadDetectChangeUrl(window.location.pathname);
  });
  }

  ngOnInit(): void {
    // Give access to service
    this.navbarService.init(this);
    this.loadDetectChangeUrl(window.location.pathname);
  }

  private loadDetectChangeUrl(currentRoute) {
    // Get all urls in plain text and their respective index
    this._allUrls = this.listAllUrl(this.navbarList);
    // Detect url
    const url = this.detectUrl(currentRoute);
    // If not url detected return
    if (!url) return;
    // Change selected navbar item and load menu list
    this.changeItem(url);
    // Change location
    this.locationService.setStack(this.getPathNames(url));
  }

  detectUrl(path) {
    return this._allUrls.find(url => url[0] === path)  || [null, -1, -1];
  }

  private listAllUrl(items) {
    return items.reduce((acc, r, rIdx) => {
      return acc.concat(r.children ? 
        r.children.map((c, cIdx) => [r.path+c.path, rIdx, cIdx]) : 
        [[r.path, rIdx, -1]])
    }, []);
  }

  changeItem(url: [string, number, number]) {
    // Load children
    if (url[0]) this.menuList = this.navbarList[url[1]].children;

    // Set Index
    this.selNavbarItemIdx = url[1];
    this.selMenuItemIdx = url[2];
  }

  private getPathNames(url: [string, number, number]) {
    if (!url[0]) return null;
    const navbarItem = this.navbarList[url[1]]
    const menuItem = navbarItem.children ? navbarItem.children[url[2]] : false;
    return menuItem ? 
      navbarItem.name.concat(menuItem.name) :
      navbarItem.name ;
  }

  changeNavbarItem(itemIdx, item) {
    // Keep if same path
    if (itemIdx === this.selNavbarItemIdx) return;

    // Close modal from previous window
    this.modalService.forceClose();

    // Add route
    let route = item.path;
    let menuIdx = -1;
    // Check for children
    if (item.children) {
      menuIdx = item.selChildIdx;
      route = route.concat(item.children[menuIdx].path);
    }
    // Change selected item
    const url: [string, number, number] = [route, itemIdx, menuIdx];
    this.changeItem(url);
    // Change location
    const pathNames = this.getPathNames(url);
    this.locationService.setStack(pathNames);
    // Navigate
    this.router.navigate([url[0]]);
  }

  changeMenuItem(menuItemIdx, menuItem, navbarItem) {
    // Keep if same path
    if (menuItemIdx === this.selMenuItemIdx) return;

    // Close modal from previous window
    this.modalService.forceClose();

    // Change location
    this.locationService.removeItemFromStack();
    this.locationService.addItemToStack(menuItem.name);
    
    this.selMenuItemIdx = menuItemIdx;

    // Is modal or not?
    // Modal menu items have component attribute
    if (menuItem.component) {
      this.modalService.changeComponent(menuItem.component);
    }
    else {
      const route = navbarItem.path.concat(menuItem.path);
      this.router.navigate([route]);
    }
  }

  loadCustomMenu(menu, selItemIdx) {
    this.menuList = menu;
    this.selMenuItemIdx = selItemIdx;
  }

  saveState() {
    this._states.push({
      menuList: this.menuList,
      selMenuItemIdx: this.selMenuItemIdx
    });
    // Disable menu after saving state
    this.selMenuItemIdx = -1;
    this.menuList = null;
  }

  restoreState() {
    const oldData = this._states[this._states.length-1];
    this.menuList = oldData.menuList;
    this.selMenuItemIdx = oldData.selMenuItemIdx;
    this._states.pop();
  }

}
