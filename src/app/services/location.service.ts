import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ModalService } from '../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  paths = {
    Auth: {
      navItems: [
        { name: 'Login', path: '/auth/login', component: 'LoginComponent' },
        { name: 'Register', path: '/auth/register', component: 'RegisterComponent' }
      ],
    }
  }

  location$ = new BehaviorSubject<string>('Main');
  location: string[] = [];
  navItems$ = new Subject<any>();
  navItems: any[] = [];

  frozenData;
  fixed = false;

  parentLoc;

  constructor(
    // private modal: ModalService
  ) { }

  subscribeLocation() {
    if (this.fixed) return;
    return this.location$.asObservable();
  }

  subscribeNavItems() {
    if (this.fixed) return;
    return this.navItems$.asObservable();
  }

  changeRootLoc(location) {
    if (this.fixed) return;

    this.location = [location];
    this.location$.next(location);
    this.parentLoc = location;
    // this.modal.close();
  }

  changeNavItems(navItems, selected?) {
    if (this.fixed) return;

    this.navItems = navItems;
    this.navItems$.next({
      navItems: this.navItems,
      modal: !!this.frozenData,
      selected
    });
  }

  addChildLoc(location, opt:{extend:boolean, parentLoc?:string, useNav?:boolean}) {
    if (this.fixed) return;

    const checkSameParent = this.parentLoc && opt.parentLoc === this.parentLoc;
    
    if (opt.useNav && !checkSameParent) {
      this.changeNavItems(this.paths[opt.parentLoc].navItems, location);
    } else if (!opt.useNav && !checkSameParent) {
      this.changeNavItems([]);
    }

    if (checkSameParent) {
      opt.extend = true;
    }

    if (!opt.extend && !opt.parentLoc) {
      this.changeRootLoc(location);
    }
    else if (!opt.extend && opt.parentLoc) {
      this.changeRootLoc(opt.parentLoc);
      this.location.push(location);
      const newLoc = this.location.join(' > ');
      this.location$.next(newLoc);
    }
    else if (opt.extend) {
      this.location.push(location);
      const newLoc = this.location.join(' > ');
      this.location$.next(newLoc);
    }
  }

  removeChildLoc(skip) {
    if (this.fixed) return;

    this.location.pop();
    if (skip) return;
    const newLoc = this.location.join(' > ');
    this.location$.next(newLoc);
  }

  freeze() {
    this.frozenData = {
      location: this.location,
      navItems: this.navItems,
      parentLoc: this.parentLoc
    };
  }

  restore() {
    this.location = this.frozenData.location;
    this.location$.next(this.location.join(' > '));
    this.changeNavItems(this.frozenData.navItems);
    this.parentLoc = this.frozenData.parentLoc;
    this.frozenData = null;
  }

  getLocation() {
    return this.location;
  }

  fixLocation() {
    this.fixed = true;
  }

  unfixLocation() {
    this.fixed = false;
  }

}
