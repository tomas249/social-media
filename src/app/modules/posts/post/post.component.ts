import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { TimeService } from 'src/app/utils/time.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { TokenService } from 'src/app/services/token.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { LazyLoaderService } from 'src/app/services/lazy-loader.service';
import { TooltipService } from 'src/app/shared/tooltip/tooltip.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  _inputConfig;
  @Input()
  set inputConfig(inputConfig) {
      this._inputConfig = inputConfig;
      this.config = Object.assign(this.config, inputConfig);
  }
  get inputConfig() {
    return this.inputConfig;
  }
  @Input() publishConfig;
  @Input() deleteConfig;
  @Input() reload = false;

  _post;
  @Input()
    set post(post) {
      this.countData(post);
      if (!this._post || (this._post && this.reload)) {
        this._post = this.loadConfig(post);
        this.reload = false;
      } else {
        if (this._post.child.length > post.child.length) {
          this.config.replied = false;
          this.config.deleted = true;
        }
        else if (this._post.child.length < post.child.length) {
          this.config.replied = true;
          this.config.deleted = false;
        }
        else if (this._post.child.length === post.child.length) {
          this.config.replied = false;
          this.config.deleted = false;
        }
        this._post = Object.assign({}, post);
      }
    }
    get post() {
      return this._post;
    }

  config = {
    showOpt: true,
    owner: false,
    replied: false,
    deleted: false,
    liked: false,
    shared: false,
    reported: false,
    thread: false,
    tooltip: true
  }

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
    private lazyLoader: LazyLoaderService,
    private cd: ChangeDetectorRef,
    private tooltip: TooltipService
  ) { }


  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    const different = changes.post?.previousValue?._id !== changes.post?.currentValue._id
    if (!changes.post?.firstChange && different) {
      // Reset values when changing posts
      this._post = this.loadConfig(changes.post.currentValue);
      this.config.replied = false;
      this.config.deleted = false;
    }
  }

  ngOnDestroy() {
  }

  private loadConfig(data) {
    const uid = this.token.getUserId();
    data = this.auth(data, uid);

    if (data.confirm) {
      this.config = Object.assign(this.config, data.confirm);
      this.config = Object.assign(this.config, this._inputConfig);
    }
    return data;
  }

  private countData(data) {
    this.count = {
      replies: data.child.length,
      likes: data.likes,
      shares: 0 // not added yet
    };
  }

  private auth(post, uid?) {
    if (uid) {
      post.confirm = {
        owner: post.owner._id === uid,
        liked: post.whoLiked.includes(uid)
      }
    }
    return post;
  }

  onReply() {
    if (!this.checkAuth('In order to reply a post you need to be logged in')) return;
    this.modal.open('PostsModule', 'PostPublishComponent', 
      {
        postReply: this.post, 
        destinationConfig: this.publishConfig
      });
    // this.modal.waitForResponse().subscribe(res => {
    //   if (res) {
    //     this.count.replies += 1;
    //     this.config.replied = true;
    //   }
    // })
  }

  onLike() {
    if (!this.checkAuth('In order to like a post you need to be logged in')) return;
    if (this.config.liked) {
      this.config.liked = false;
      this.count.likes -= 1;
    }
    else {
      this.config.liked = true;
      this.count.likes += 1;
    }
    this.postsService.likePost(this.post._id)
  }

  onDelete() {
    this.postsService.deletePost(this.post._id, this.deleteConfig);
  }

  checkAuth(message) {
    if (!this.token.isLogged()) {
      this.modal.addMessage(message);
      this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
      return false;
    } else {
      return true;
    }
  }

  @ViewChild('img') img:ElementRef
  openTooltip(event) {
    if (!this.config.tooltip) return;
    this.img.nativeElement.style.zIndex = '10';
    const a = this.img.nativeElement.getBoundingClientRect();
    // console.log(a)
    const start = a.y;
    const X = a.x + a.width / 2;
    const Y = a.y + a.height;
    // console.log(X, Y, start)
    // this.tooltip.open(event.clientX, event.clientY, 'AuthModule', 'LoginComponent');
    this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', {user: this.post.owner});
    // this.tooltip.open(start, X, Y, 'AuthModule', 'LogoutComponent', {user: this.post.owner});
    // this.tooltip.open(start, X, Y, 'PostsModule', 'PostComponent', {post: this.post});
  }

  closeTooltip() {
    this.tooltip.close();
    this.img.nativeElement.style.zIndex = '2';
  }
}

