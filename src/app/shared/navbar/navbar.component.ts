import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';
import { ModalService } from '../modal/modal.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // @Input() itemsList: {
  //   name: string,
  //   path: string,
  //   children?: {
  //     name: string,
  //     path: string
  //   }[],
  //   selChildIdx?: number
  // }[];
  @Input() itemsList;

  selItemIdx: number;
  selSubItemIdx: number = -1;

  private _allUrls: [string, number, number][] = [];
  private _states = [];

  subMenu = null;

  constructor(
    private router: Router,
    private locationService: LocationService,
    private navbarService: NavbarService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.navbarService.init(this);
    this._allUrls = this.listAllUrl(this.itemsList);
    // Detect url on init
    this.detectUrlAndChangeLoc(this.router.url);
    // Detect url on change
    this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe(event => {
        this.detectUrlAndChangeLoc(event.url)
      });
  }

  private listAllUrl(items) {
    let urls = [];
    items.forEach((item, idx) => {
      if (item.children) {
        item.children.forEach((subItem, subIdx) => {
          const path = item.path.concat(subItem.path);
          urls.push([path, idx, subIdx]);
        });
      }
      else {
        urls.push([item.path, idx, -1]);
      }
    });
    return urls;
  }

  private detectUrlAndChangeLoc(currentUrl: string) {
    this._allUrls.forEach(url => {
      // Detected url
      if (url[0] === currentUrl) {
        this.selItemIdx = url[1];
        this.selSubItemIdx = url[2];

        // Set root location
        const selectedItem = this.itemsList[this.selItemIdx];
        const rootPathName = selectedItem.name;
        this.locationService.changeStackRoot(rootPathName);

        // Set child location
        if (this.selSubItemIdx !== -1) {
          const childPathName = selectedItem.children[this.selSubItemIdx].name;
          this.locationService.changeItemAtRoot(childPathName, rootPathName);
        }
      }
    });
  }

  loadSubMenu(subMenuItems) {
    this.saveState();
    this.locationService.changeStackRoot(subMenuItems.name);
    this.selSubItemIdx = subMenuItems.selChildIdx;
    this.subMenu = subMenuItems;
    this.locationService.addItemToStack(this.subMenu.children[this.selSubItemIdx].name)
  }

  getSubItemsList() {
    if (this.subMenu) {
      return this.subMenu.children;
    }
    else {
      return this.itemsList[this.selItemIdx].children;
    }
  }
  

  changeItem(itemIdx, item) {
    // Keep if same path
    if (itemIdx === this.selItemIdx) return;

    // Add route
    let route = item.path;
    // Check for children
    if (item.children) {
      route += item.children[item.selChildIdx].path;
    }
    this.router.navigate([route]);
  }

  changeSubItem(subItemIdx, subItem, item?) {
    // Keep if same path
    if (subItemIdx === this.selSubItemIdx) return;
    
    if (this.subMenu) {
      this.selSubItemIdx = subItemIdx;
      this.locationService.changeItemAtRoot(subItem.name, this.subMenu.name);
      // this.modalService.changeComponent(subItem.modalOrigin, subItem.component);
    }
    else {
      this.router.navigate([item.path.concat(subItem.path)]);
    }
  }

  private saveState() {
    this._states.push({
      itemsList: this.itemsList,
      selItemIdx: this.selItemIdx,
      selSubItemIdx: this.selSubItemIdx,
      subMenu: this.subMenu
    });
  }

  restoreState(keepSubMenu=true) {
    const state = this._states[this._states.length-1];
    this.itemsList = state.itemsList;
    this.selItemIdx = state.selItemIdx;
    this.selSubItemIdx = state.selSubItemIdx;
    if (keepSubMenu) {
      this.subMenu = state.subMenu;
      const itemName = this.itemsList[this.selSubItemIdx].name;
      this.locationService.changeItemAtRoot(itemName, this.subMenu.name);
    }
    else {
      this.subMenu = null;
      const selItem = this.itemsList[this.selItemIdx];
      this.locationService.changeStackRoot(selItem.name);
      if (selItem.children) {
        this.locationService.addItemToStack(selItem.children[this.selSubItemIdx].name);
      }
    }
    this.locationService.finishComposition();
    this._states.pop();
  }

  private reloadLocation(root, item) {
    this.locationService.changeStackRoot(root)
  }

}
