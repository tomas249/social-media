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

  postsList = [];
  postsSubject = new BehaviorSubject(this.postsList);
  updatedPosts = this.postsSubject.asObservable();

  selectedPost;

  constructor(
    private api: ApiService,
    private token: TokenService,
  ) { }

  selectPost(postId) {
    this.selectPost = postId;
  }

  getAllPosts() {
    const uid = this.token.getUserId();
    this.api.get('/posts?parent[size]=0').subscribe(
      res => {
        this.postsList = res.data.data;
        if (uid) {
          this.postsList.forEach((post, i) => {
            // for unique or authorized actions
            this.postsList[i].confirm = {
              owner: post.owner._id === uid,
              liked: post.whoLiked.includes(uid)
              // add report
            }
          });
        }
        this.postsSubject.next([...this.postsList]);
      }
    )
  }

  getPostById(postId) {
    return this.api.get(`/posts?_id=${postId}&childLevel=3`).pipe(
      // Filter always returns array and we are searching only 1 post
      map(res => res.data.data[0])
    );
  }

  sendPostsList(postsList) {
    this.postsList = postsList;
    this.postsSubject.next(this.postsList);
  }

  deletePostById(postId) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    this.api.delete(`/posts/${postId}`).subscribe(
      res => {
        this.postsList = this.postsList.filter(post => post._id !== postId);
        this.postsSubject.next(this.postsList);
      }
    )
  }

  publishPost(post, postId?) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}

    return;
    const path = postId ? `/posts/${postId}/reply` : '/posts'; 
    this.api.post(path, {text: post}).subscribe(
      res => {
        this.postsList = res.data.data;
        console.log('published and returned:', this.postsList)
        this.postsSubject.next(this.postsList)
      }
    );
  }

  // getPostById(postId) {
  //   return this.api.get(`/posts?_id=${postId}&childLevel=3`).pipe(
  //     // Filter always returns array and we are searching only 1 post
  //     map(res => res.data.data[0])
  //   );
  // }


  replyPost(post, postIdReply) {
    if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
    return this.api.post(`/posts/${postIdReply}/reply`, {text: post});
  }

  // likePost(postId) {
  //   if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
  //   return this.api.get(`/posts/${postId}/like`);
  // }

  // deletePost(postId) {
  //   if (!this.token.isLogged()) {console.error('Please login'); return throwError('');}
  //   return this.api.delete(`/posts/${postId}`);
  // }




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
}
