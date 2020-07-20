import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  navItems$ = new BehaviorSubject<any>([]);
  navItems: any[] = [];

  frozenData;

  constructor( ) { }

  subscribeLocation() {
    return this.location$.asObservable();
  }

  subscribeNavItems() {
    return this.navItems$.asObservable();
  }

  changeRootLoc(location) {
    this.location = [location];
    this.location$.next(location);
    this.changeNavItems([]);
  }

  addChildLoc(location, parentLoc) {
    if (parentLoc) {
      this.changeRootLoc(parentLoc);
      this.changeNavItems(this.paths[parentLoc].navItems, location);
    }
    this.location.push(location);
    const newLoc = this.location.join(' > ');
    this.location$.next(newLoc);
  }

  removeChildLoc() {
    const last = this.location.pop();
    if (last === this.navItems[0].selected) {
      this.navItems.shift();
    }
    this.navItems$.next(this.navItems);
    const newLoc = this.location.join(' > ');
    this.location$.next(newLoc);
  }

  changeNavItems(navItems, selected?) {
    this.navItems = navItems;
    if (navItems.length !== 0 && !navItems[0].selected && selected) this.navItems.unshift({ selected });
    this.navItems$.next(navItems);
  }

  freeze() {
    this.frozenData = {
      location: this.location,
      navItems: this.navItems
    };
  }

  restore() {
    this.location = this.frozenData.location;
    this.navItems = this.frozenData.navItems;
    this.location$.next(this.location.join(' > '));
    this.navItems$.next(this.navItems);
  }

}
