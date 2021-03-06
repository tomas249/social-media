import { Component, HostListener, OnInit } from '@angular/core';
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

  isMobile;

  @HostListener("window:resize", [])
  onResize() {
    this.isMobile = window.innerWidth < 770;
  }

  constructor(
    private navbarService: NavbarService,
    private tokenService: TokenService,
    private locationService: LocationService,
    private modalService: ModalService,
    private router: Router,
    location: PlatformLocation
  ) {
    this.tokenService.user$.subscribe(_ => {
      this.navbarList = navbarList(this.tokenService);
    });
    // When going back, update navbar
    location.onPopState(() => {
      this.loadDetectChangeUrl(window.location.pathname);
    });
  }

  ngOnInit(): void {
    // Check screen size
    this.isMobile = window.innerWidth < 770;
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
    return items.reduce((acc1, p, pIdx) => {
      const main = [p.path].concat(p.activation || []);
      return acc1.concat(main.reduce((acc2, r, rIdx) => {
        return acc2.concat(p.children ? 
          p.children.map((c, cIdx) => [r+c.path, pIdx, cIdx]) : 
          [[r, pIdx, -1]]);
      }, []));
    }, []);
  }


  changeItem(url: [string, number, number], skipMenu=false) {
    // Load children
    if (url[0] && !skipMenu) this.menuList = this.navbarList[url[1]].children;
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

    // Close all modals before changing location
    this.modalService.forceClose(0);

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

  changeMenuItem(menuItemIdx, menuItem?) {
    menuItem = this.menuList[menuItemIdx];
    // Keep if same path
    if (menuItemIdx === this.selMenuItemIdx) return;
    
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
      let route;
      // Some menus do not have their origin from navbar
      // If it is a simulation, skip navbar path
      const navbarItem = this.navbarList[this.selNavbarItemIdx];
      if (navbarItem && !menuItem.activated) {
        route = navbarItem.path.concat(menuItem.path)
      }
      else {
        route = menuItem.path;
      }

      this.router.navigate([route]);
    }
  }

  loadCustomMenu(menu, selItemIdx) {
    // Compare
    if (!this.menuList || !this.menuList[0].activated || this.selMenuItemIdx !== selItemIdx) {
      this.menuList = menu;
      this.selMenuItemIdx = selItemIdx;

      // Change location
      this.locationService.removeItemFromStack();
      this.locationService.addItemToStack(menu[selItemIdx].name);
    }
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
