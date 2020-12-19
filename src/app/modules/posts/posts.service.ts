import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { catchError, first, flatMap, map, mergeMap, switchMap, take, takeLast, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { HttpEvent } from '@angular/common/http';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  /**
   * IDEA:
   * in service:
   *    1 global list which tracks changes
   *    1 behaviorsub to get changes
   * 
   *  instant update
   *  once got resp from server, update
   */

  private _postsList = null;
  private _posts = new Subject();
  posts$ = this._posts.asObservable();
  
  private _mainPost = null;
  private _post = new BehaviorSubject(this._mainPost);
  post$ = this._post.asObservable();

  constructor(
    private api: ApiService,
    private token: TokenService,
    private uploadFile: UploadFileService
  ) {
    // this.posts$.subscribe(console.error)
  }

  getPostsList(queryUrl) {
    // if (!this.allowSearch) return;
    // params = params || '?parent[size]=0&childLevel=3';
    return this.api.get(queryUrl).pipe(
      tap(res => {
        this._postsList = res.data;
        this._posts.next(this._postsList);
      }),
      catchError(e => of([])));
  }

  /** EDITING */

  setList(list) {
    this._postsList = list.reverse();
    this._posts.next(this._postsList);
  }

  clearAll() {
    this._postsList = null;
    this._mainPost = null;
    // this._post.complete();
    // this._posts.complete();
    // this._post = new BehaviorSubject(this._mainPost);
    // this._posts = new Subject();
    // this.posts$ = this._posts.asObservable();
    // this.post$ = this._post.asObservable();
  }

  setMainPost(post, c) {

    const mPost = this._mainPost;
    if (mPost && post._id === mPost._id) return;

    let p = [];

    if (mPost && c && ['post', 'reply'].includes(c.type)) {
      // Add main post parent
      p = p.concat(mPost.parent);
      // Add main post
      p = p.concat(mPost);

      if (c.type === 'reply') {
        p = p.concat(this._postsList[c.i]);
      }
    }

    if (mPost && c && c.type === 'parent') {
      p = mPost.parent.slice(0, c.i);
    }

    if (mPost && c && ['parent', 'post', 'reply'].includes(c.type)) {
      post.parent = p;
    }

    // // Clear list
    this._postsList = false;
    this._posts.next(this._postsList);

    // Browser sometimes saves data and avoids new list to be searched
    // Because of this, replace all child attribute data with nulls
    // We still need its length in order to show how many replies there are
    // post.parent = Array(post.parent.length);
    post.child = Array(post.child.length);

    // Send new post
    this._mainPost = post;
    this._post.next(this._mainPost);


    // this.getPostById(post._id);
    // this.api.get(`/posts?_id=${post._id}&childLevel=2`).pipe(
      //   // Filter always returns array and we are searching only 1 post
      //   map(res => res.data[0]),
      //   tap(aa => {
        //     console.log(aa)
        //     // this._mainPost = aa;
        //     // this._post.next(this._mainPost);
    //     this._postsList = aa.child.reverse();
    //     this._posts.next(this._postsList);
    //   }),
    //   // first()
    // ).subscribe();
  }
  
  getPostById(postId) {
    return this.api.get(`/posts?_id=${postId}&childLevel=2`).pipe(
      // Filter always returns array and we are searching only 1 post
      map(res => res.data[0]),
      tap(post => {
        this._mainPost = {...post};
        this._postsList = post.child.reverse();
        this._posts.next(this._postsList);
      })
      // tap(post => {
      //   if(setMainMenu) {
      //     this._mainPost = {...post};
      //     this._post.next(this._mainPost);
      //   }

        // this._postsList = post.child.reverse();
        // this._posts.next(this._postsList);
    );
  }


  deletePost(postId, config) {
    this.checkAuth();
    this.removeFromList(config);

    this.api.delete(`/posts/${postId}`).subscribe();
  }

  publishPost(post, config) {
    const path = '/posts';
    return this.universalPost(path, post, config);

  }

  replyPost(postId, post, config) {
    const path = `/posts/${postId}/reply`;
    return this.universalPost(path, post, config);
  }

  private universalPost(path, post, config) {
    this.checkAuth();
    this.addToList(post, config);
    if (post.media) {
      return this.uploadGallery(post.media).pipe(
        mergeMap(res1 => {
          if (res1.completed) {
            // Replace media with updated gallery
            post.media = res1.gallery;
            return this.api.post(path, post).pipe(
              map(res2 => res2.data),
              tap(post => {
                this.editFromList(post, config);
              })
            )
          }
          else {
            return of(res1);
          }
        }),
      );
    }
    else {
      return this.api.post(path, post).pipe(
        map(res => res.data),
        tap(res => {
          this.editFromList(res, config);
        })
      );
    }
  }

  addToList(post, config:{destination, parentIndex?, end?}) {
    /**
     * destination: 0-none, 1-post, 2-reply
     * end: beginning or end of list
     */
    switch(config.destination) {
      case 1:
        config.end ?
        this._postsList.push({...post}) :
        this._postsList.unshift({...post}) ;
        break;
      case 2:
        config.end ?
        this._postsList[config.parentIndex].child.push({...post}) :
        this._postsList[config.parentIndex].child.unshift({...post}) ;
        break;
    }
    if (config.destination !== 0) this._posts.next(this._postsList);
  }

  removeFromList(config:{destination, parentIndex, childIndex?}) {
    switch (config.destination) {
      case 1:
        this._postsList.splice(config.parentIndex, 1);
        // Remove from main post if exists
        if (this._mainPost) {
          this._mainPost = Object.assign(
            {...this._mainPost}, 
            {child: this._mainPost.child});
          this._post.next(this._mainPost);
        }
        break;
      case 2:
        this._postsList[config.parentIndex].child.splice(config.childIndex,1);
        // Remove from parent
        this._postsList[config.parentIndex] = {...this._postsList[config.parentIndex]};
        break;
    }
    if (config.destination !== 0) this._posts.next(this._postsList);
  }

  editFromList(post, config:{destination, parentIndex?, childIndex?}) {
    switch(config.destination) {
      case 1:
        this._postsList[config.parentIndex] = {...post};
        break;
      case 2:
        this._postsList[config.parentIndex].child[config.childIndex] = post;
        break;
    }
    if (config.destination !== 0) this._posts.next(this._postsList);
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
      return ' empty ';
    }
    else {
      return ` pop(${obj.child.length}) >` + this.getPop(obj.child[0])
    }
  }

  checkAuth() {
    if (!this.token.isLogged()) {
      console.error('Please login');
      // this.modal.addMessage('In order to reply or like, you need to login');
      // this.modal.open('AuthModule', 'LoginComponent')
      return throwError('');
    }
  }

  uploadGallery(gallery) {
    const fd = new FormData();
    gallery.forEach(image => {
      fd.append('gallery', image);
    });

    const opt = this.uploadFile.getOptions();
    
    // Upload all images to get their url
    return this.api.post('/files/uploadGallery', fd, opt).pipe(
      map(event => {
        const res = this.uploadFile.getProgress(event);
        if (!res.completedUpload) {
          
          return res;
        }
        else {
          // Expected response is an array of gallery with their paths
          const gallery = res.data.map(image => {
            return {
              filename: image.filename,
              relativePath: `/p/${image.filename}`,
              fullPath: `${environment.baseUrl}/p/${image.filename}`
            };
          });
          return {
            completed: true,
            message: res.message,
            gallery
          };
        }

      }
    ));
  }
}
