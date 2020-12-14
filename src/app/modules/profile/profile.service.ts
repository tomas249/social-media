import { Injectable } from '@angular/core';
import { forkJoin, iif, of } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  uid;
  uFollowing = [];

  constructor(
    private api: ApiService,
    private tokenService: TokenService,
    private location: Location,
    private router: Router
  ) {
    if (this.tokenService.isLogged()) {
      this.uid = this.tokenService.getUserId();
      // this.getFollows(this.uid).subscribe(f => {
      //   this.uFollowing = f.following;
      // });
    }
  }

  

  // Get user data
  getUser(byData, type) {
    const tknUID = this.tokenService.getUserId();
    const user:any = this.tokenService.getUserData();

    // // If used 'me', replace by username
    // if (byData === 'me') {
    //   const url = this.router.url.replace('me', user.username);
    //   this.location.go(url);
    // }

    const allPaths = [
      (uid) => `/users/${uid}`,
      (uname) => `/users/u/${uname}`
    ];

    const path = allPaths[type](byData);

    return this.api.get(path).pipe(
      tap(profile => {
        // If uid used then change url by username
        if (type === 0) {
          const url = this.router.url.replace(byData, profile.username);
          this.location.go(url);
        }
      })
    );
  }

  getFollows(uid, populate?) {
    return this.api.get(`/users/${uid}/followList/${populate}`);
  }

  isFollowing(followerUID) {
    if (followerUID === this.uid) {
      return of([false, true]);
    }
    else if (this.uid) {
      return this.getFollows(this.uid).pipe(
        map(f => [f.following.includes(followerUID), false])
      );
    }
    else {
      // Not following and not owner
      return of([false, false]);
    }
  }

  isFollowingFromList(uid, populate) {
    // Get populated list
    return forkJoin({
      f: this.getFollows(uid, populate),
      u: iif(() => this.uid, this.getFollows(this.uid), of({following: []}))
    }).pipe(
      map(r => {
        const uFwing = r.u.following;
        const fList = r.f[populate];
        return fList.reduce((acc, f) => {
          return acc.concat({
            isOwner: f._id === this.uid,
            isFollowing: uFwing.includes(f._id),
            user: f
          });
        }, []);
      })
    );
  }

  follow(uid) {
    return this.api.get(`/users/${uid}/follow`);
  }

  // Get followers
  // /posts?owner=5fcf56658faf9c10f57638f2&parent[exists]=true&parent[not][size]=0
}
