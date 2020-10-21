import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';

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

  constructor(
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
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

  changeSubItem(subItemIdx, subItem, item) {
    // Keep if same path
    if (subItemIdx === this.selSubItemIdx) return;
    
    this.router.navigate([item.path.concat(subItem.path)]);
  }

}
