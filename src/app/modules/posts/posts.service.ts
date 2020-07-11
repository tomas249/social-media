import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getNewPosts = new BehaviorSubject([]);
  allPosts = [];

  constructor(
    private api: ApiService,
    private token: TokenService
  ) { }

  subscribeToNewPosts() {
    // if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    return this.getNewPosts;
  }

  getAllPosts() {
    return this.api.get('/posts?parent[size]=0').pipe(
      catchError(err => throwError('cannot get list'))
    );
  }

  getPost(postId) {
    return this.api.get(`/posts?_id=${postId}&childLevel=3`).pipe(
      // Filter always returns array and we are searching only 1 post
      map(res => res.data.data[0])
    );
  }

  publishPost(post) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    this.api.post('/posts', {text: post}).subscribe(
      res => {
        this.allPosts = res.data.data;
        this.getNewPosts.next(this.allPosts);
      }
    );
  }

  replyPost(post, postIdReply) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    return this.api.post(`/posts/${postIdReply}/reply`, {text: post}).pipe(
      map(res => res.data)
    );
  }

  likePost(postId) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    return this.api.get(`/posts/${postId}/like`).pipe(
      map(res => res.data)
    );
  }

  deletePost(postId) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    return this.api.delete(`/posts/${postId}`);
  }
}
