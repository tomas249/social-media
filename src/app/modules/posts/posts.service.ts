import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { catchError, map } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getNewPosts = new BehaviorSubject([]);
  allPosts = [];

  constructor(
    private api: ApiService
  ) { }

  subscribeToNewPosts() {
    return this.getNewPosts;
  }

  getAllPosts() {
    return this.api.get('/posts').pipe(
      catchError(err => throwError('cannot get list'))
    );
  }

  getPost(postId) {
    return this.api.get(`/posts?_id=${postId}`).pipe(
      // Filter always returns array and we are searching only 1 post
      map(res => res.data.data[0])
    );
  }

  publishPost(post) {
    this.api.post('/posts', {text: post}).subscribe(
      res => {
        this.allPosts = res.data.data;
        this.getNewPosts.next(this.allPosts);
      }
    );
  }

  likePost(postId) {
    return this.api.get(`/posts/${postId}/like`).pipe(
      map(res => res.data)
    );
  }

  deletePost(postId) {
    return this.api.delete(`/posts/${postId}`);
  }
}
