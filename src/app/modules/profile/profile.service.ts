import { Injectable } from '@angular/core';
import { forkJoin, iif, of } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { environment } from 'src/environments/environment';

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
    private router: Router,
    private uploadFile: UploadFileService
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

  updateUserData(updatedUser) {
    return this.api.post('/users/updateProfile', {updatedUser});
  }


  updateAvatar(newImage) {
    const fd = new FormData();
    fd.append('avatar', newImage);

    const opt = this.uploadFile.getOptions();
    
    // Upload all images to get their url
    return this.api.post('/files/updateAvatar', fd, opt).pipe(
      map(event => {

        const res = this.uploadFile.getProgress(event);
        if (!res.completedUpload) {
          return res;
        }
        else {
          const avatarPath = res.data;
          const avatar = {
            filename: avatarPath,
            relativePath: `/a/${avatarPath}`,
            fullPath: `${environment.baseUrl}/a/${avatarPath}`
          };
          return {
            completed: true,
            message: res.message,
            avatar
          };
        }
      },
    ));
  }

}
