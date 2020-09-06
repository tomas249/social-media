import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable, Subject } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { HttpEvent } from '@angular/common/http';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  allowSearch = true;
  postsList = [];
  updatedPosts$ = new BehaviorSubject(this.postsList);

  constructor(
    private api: ApiService,
    private token: TokenService,
    private modal: ModalService
  ) { }

  getPostById(postId) {
    return this.api.get(`/posts?_id=${postId}&childLevel=3`).pipe(
      // Filter always returns array and we are searching only 1 post
      map(res => res.data.data[0])
    );
  }

  changePostsList(postsList) {
    this.postsList = postsList.reverse();
    this.updatedPosts$.next(this.postsList);
  }

  getAllPosts(params?) {
    if (!this.allowSearch) return;
    params = params || '?parent[size]=0&childLevel=3';
    this.api.get('/posts' + params).subscribe(
      res => {
        this.postsList = res.data.data;
        this.updatedPosts$.next(this.postsList);
      }
    )
  }

  getFollowersPosts() {
    this.api.get(`/posts/user`).subscribe(res => {
      this.postsList = res.data;
      this.updatedPosts$.next(this.postsList);
    });
  }

  deletePost(postId, config) {
    this.checkAuth();

    this.api.delete(`/posts/${postId}`).subscribe(
      res => {
        this.removeFromList(config);
      }
    )
  }

  publishPost(post, config) {
    this.checkAuth();

    const path = '/posts'; 
    this.api.post(path, {text: post}).subscribe(
      res => {
        this.addToList(res.data, config);
      },
      err => console.error(err)
    );
  }

  replyPost(postId, post, config) {
    this.checkAuth();

    const path = `/posts/${postId}/reply`;
    this.api.post(path, {text: post}).subscribe(
      res => {
        this.addToList(res.data, config);
      },
      err => console.error(err)
    )
  }

  private addToList(post, config:{destination, parentIndex, end?}) {
    if (config.destination === 1) {
      if (config.end) {
        this.postsList.push(post);
      } else {
        this.postsList.unshift(post);
      }
    }
    else if (config.destination === 2) {
      console.log(config)
      if (config.end) {
        this.postsList[config.parentIndex].child.push(post);
      } else {
        this.postsList[config.parentIndex].child.unshift(post);
      }
    }

    if (config.destination !== 0) {
      this.updatedPosts$.next(this.postsList);
    }
  }

  private removeFromList(config:{destination, parentIndex, childIndex?}) {
    if (config.destination === 1) {
      this.postsList.splice(config.parentIndex, 1);
    }
    else if (config.destination === 2) {
      this.postsList[config.parentIndex].child.splice(config.childIndex,1);
    }

    if (config.destination !== 0) {
      this.updatedPosts$.next(this.postsList);
    }
  }

  likePost(postId) {
    this.checkAuth();
    this.api.get(`/posts/${postId}/like`).subscribe();
  }


  getPop(obj) {
    if (!obj.child) {
      return ' null '
    }
    else if (obj.child.length === 0) {
      return ' empty';
    }
    else {
      return ` pop(${obj.child.length}) >` + this.getPop(obj.child[0])
    }
  }

  checkAuth() {
    if (!this.token.isLogged()) {
      console.error('Please login');
      this.modal.addMessage('In order to reply or like, you need to login');
      this.modal.open('AuthModule', 'LoginComponent')
      return throwError('');
    }
  }
}
