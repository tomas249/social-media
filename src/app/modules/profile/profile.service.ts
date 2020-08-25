import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  selectedUser;
  followsList;
  currentUserId;

  constructor(
    private api: ApiService,
    private token: TokenService
  ) {
    this.currentUserId = this.token.getUserId();
  }

  setUser(user) {
    this.selectedUser = user;
  }

  removeUser() {
    this.selectedUser = null;
  }

  getStoredUser() {
    return this.selectedUser || false;
  }

  getUserById(userId) {
    return this.api.get('/users/' + userId);
  }

  getUserByUsername(username) {
    return this.api.get('/users/u/' + username);
  }

  getFollowsFromUser(userId, field=null) {
    return this.api.get('/users/' + userId + '/followList/' + field);
  }

  followUser(userId) {
    if (this.followsList) {
      if (this.followsList.following.includes(userId)) {
        this.followsList.following = this.followsList.following.filter(uid => uid !== userId);
      } else {
        this.followsList.following.push(userId);
      }
    };
    return this.api.get('/users/' + userId + '/follow');
  }

  checkIfFollows(userId) {
    if (!this.currentUserId) {
      return of(false);
    }
    else if (this.currentUserId === userId) {
      return of(null);
    }
    else if (this.followsList) {
      return of(this.followsList.following.includes(userId));
    }
    else {
      return this.api.get(`/users/${this.currentUserId}/followList`).pipe(
        map(res => {
          this.followsList = res.data[0];
          return this.followsList.following.includes(userId);
        })
      );
    }
  }

  checkIfFollowsByList(userId) {
    if (!this.currentUserId) {
      return false;
    }
    else if (this.currentUserId === userId) {
      return null;
    }
    else if (this.followsList) {
      return this.followsList.following.includes(userId);
    }
    else {
      return this.api.get(`/users/${userId}/followList`).pipe(
        map(res => {
          this.followsList = res.data[0];
          return this.followsList.following.includes(userId);
        })
      );
    }
  }

  updateUserData(updatedUser) {
    return this.api.post('/users/updateProfile', {updatedUser});
  }

}
