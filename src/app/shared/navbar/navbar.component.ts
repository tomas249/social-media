import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() itemsList;

  selItemIdx;
  selSubItemIdx;

  private allUrls = [];

  constructor(
    private router: Router
  ) {
    router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe(event => {
        this.detectUrl(event.url)
      });
  }

  ngOnInit(): void {
    this.allUrls = this.listAllUrl(this.itemsList);
    this.detectUrl(this.router.url);
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
        urls.push([item.path, idx, 0]);
      }
    });
    return urls;
  }

  private detectUrl(currentUrl) {
    this.allUrls.forEach(url => {
      if (url[0] === currentUrl) {
        this.selItemIdx = url[1];
        this.selSubItemIdx = url[2];
      }
    })
  }

  changeItem(itemIdx, item) {
    this.selItemIdx = itemIdx;
    // Check for children
    let route = item.path;
    if (item.children) {
      this.selSubItemIdx = item.selChildIdx;
      route += item.children[item.selChildIdx].path;
    }
    this.router.navigate([route]);
  }

  changeSubItem(subItemIdx, subItem, item) {
    this.selSubItemIdx = subItemIdx;
    this.router.navigate([item.path.concat(subItem.path)]);
  }
}
