import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { TimeService } from 'src/app/utils/time.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { TokenService } from 'src/app/services/token.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { LazyLoaderService } from 'src/app/services/lazy-loader.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Input() config = {
    owner: false,
    replied: false,
    liked: false,
    shared: false,
    reported: false,
    thread: false
  };

  count = {
    replies: 0,
    likes: 0,
    shares: 0
  };

  constructor(
    private postsService: PostsService,
    private time: TimeService,
    private modal: ModalService,
    private token: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private lazyLoader: LazyLoaderService
  ) { }

  ngOnInit(): void {
    // this.postsService.updatedPosts.subscribe(
    //   res => console.log(res)
    // )
    if (this.post.confirm) {  
      Object.keys(this.post.confirm).forEach(key => {
        this.config[key] = this.post.confirm[key];
      });
    }
    this.count = {
      replies: this.post.child.length,
      likes: this.post.likes,
      shares: 0 // not added yet
    };
    this.post.createdAt = this.time.getTime(this.post.createdAt);
    this.post.replyRef = this.post.replyRef.map(u => '@' + u);
    // console.log(this.post, this.config, this.count);
  }

  onReply() {
    // if (!this.token.isLogged()) {
    //   this.modal.open('authModal');
    //   return;
    // }

    this.config.replied = true;
    this.count.replies += 1;
    // this.modal.emitParamsAndOpen('errorModal', {
    //   owner: this.post.owner,
    //   postId: this.post._id
    // })
    // this.modal.open('globalModal');
    // this.router.navigate([{ outlets: {'aux': ['a/login'] } }],
    // { relativeTo: this.route.parent });
    // this.router.navigate(['/m/posts/p', {outlets: { aux: 'login'}}]);
    // this.router.navigate([{outlets: {primary: '/auth/a', aux: 'login'}}]);
    
    // this.modal.loadComp('errorModal', AuthComponent)

    // this.lazyLoader.loadModule(() =>
    //   import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
    // );
    this.modal.open('AuthModule', 'LoginComponent')

  }

  onLike() {
    if (this.config.liked) {
      this.config.liked = false;
      this.count.likes -= 1;
    }
    else {
      this.config.liked = true;
      this.count.likes += 1;
    }
  }

  onPublish() {
    return;
  }

  onDelete() {
    return;
  }

  // likePost(postId) {
  //   this.postsService.likePost(postId).subscribe(
  //     newPost => {
  //       this.post['likes'] = newPost.likes;
  //       this.post['whoLiked'] = newPost.whoLiked;
  //     }
  //   );
  // }

  // deletePost(postId, parent=[]) {
  //   this.postsService.deletePost(postId).subscribe(
  //     res => {
  //       // console.log(this.post)
  //       this.deleted.emit({postId, parent});
  //     }
  //   );
  // }

  // onComment() {
  //   this.comment = true;
  // }

  // onNewReply(newPost) {
  //   // this.post['child'] = newPost['child'];
  //   console.log(newPost)
  //   this.replied.emit(newPost);
  //   this.closeModal();
  //   this.newReply = true;
  //   // this.post.child = newPost.child;
  // }

  // closeModal() {
  //   this.comment = false;
  // }


}

