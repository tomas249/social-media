import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  location = new BehaviorSubject<string>('');
  locations: string[];
  navItems = new BehaviorSubject<any>([]);

  constructor( ) { }

  subscribeLocation() {
    return this.location.asObservable();
  }

  subscribeNavItems() {
    return this.navItems.asObservable();
  }

  changeLocation(location, navItems) {
    this.locations = [location];
    this.location.next(location);
    this.navItems.next(navItems);
  }

  addChildLocation(childLocation) {
    this.locations.push(childLocation);
    const newLoc = this.locations.join(' > ');
    this.location.next(newLoc);
  }

  removeChildLocation() {
    this.locations.pop();
    const newLoc = this.locations.join(' > ');
    this.location.next(newLoc);
  }

  // getPosts() {
  //   console.log('fetching posts from db...');
  //   this.http.get<any>('http://localhost:3000/api/posts').subscribe(
  //     res => {
  //       this.arrPosts = res.data;
  //       this.subject.next([...this.arrPosts]);
  //     }
  //   );
  // }

  // addPost() {
  //   const post = {
  //     name: 'Tomas',
  //     username: 'tomtom123',
  //     content: 'does it work?',
  //     likes: 10,
  //     dislikes: 2,
  //     rating: 8
  //   }
  //   this.arrPosts.unshift(post);
  //   this.subject.next(this.arrPosts);
  // }


}
