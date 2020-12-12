import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
// import { TimeService } from 'src/app/utils/time.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { TokenService } from 'src/app/services/token.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { LocationService } from 'src/app/services/location.service';
// import { LazyLoaderService } from 'src/app/services/lazy-loader.service';
// import { TooltipService } from 'src/app/shared/tooltip/tooltip.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  // _inputConfig;
  // @Input()
  // set inputConfig(inputConfig) {
  //     this._inputConfig = inputConfig;
  //     this.config = Object.assign(this.config, inputConfig);
  // }
  // get inputConfig() {
  //   return this.inputConfig;
  // }
  @Input() contextInfo = {i: 0, type:undefined};
  @Input() publishConfig: {destination, parentIndex?, childIndex?, end?};
  @Input() deleteConfig: {destination, parentIndex, childIndex?};

  _inputConfig;
  @Input()
    set inputConfig(inputConfig) {
      // Reassign default values by the given ones
      this.config = Object.assign(this.config, inputConfig);
      this._inputConfig = inputConfig;
    }
    get inputConfig() {
      return this._inputConfig || {};
    }

  _post;
  @Input()
    set post(post) {
      // Set selected media index
      if (post.media && post.media.length !== 0 && !post.media[0].selectedIndex) {
        post.media.unshift({selectedIndex: 1});
      }
      // Simulate empty user for loading purposes
      if (this.config.empty) {
        post._id = 'loading...';
        post.replyRef = Array(this.contextInfo.i).fill('???');
        this._post = post;
      }
      // If post is incompleted, use default values
      else if (!post._id) {
        // Incompleted post means that the owner is the current publisher
        const localUser = this.token.getUserData();
        const selFields = ({id, name, username, avatar}) => ({_id:id, name, username, avatar});
        post.owner = selFields(localUser);
        // This change in config is done after inputConfig set
        this.config.owner = true;
        this.config.loading = true;
        this.config.thread = false;

        this._post = post;
      }
      else {
        // Count replies, likes, shares
        this.countData(post);
        // Check if liked/shared
        this._post = this.auth(post, this.token.getUserId());
      }
    }
    get post() {
      return this._post;
    }
  // _post;
  // @Input()
  //   set post(post) {
  //     // If incompleted use default values
  //     if (!post._id) {
  //       this.token.user$.subscribe(user => {
  //         this.config.owner = true;
  //         this.config.loading = true;
  //         post['owner'] = user;
  //         this._post = Object.assign({}, post);
  //       })
  //       return;
  //     }
  //     this.countData(post);
  //     if (post.media && post.media.length !== 0 && !post.media[0].selectedIndex) {
  //       post.media.unshift({selectedIndex: 1});
  //     }
  //     if (!this._post || (this._post && this.reload)) {
  //       this._post = this.loadConfig(post);
  //       this.reload = false;
  //     } else {
        
  //       if (this._post.child.length > post.child.length) {
  //         // this.config.replied = false;
  //         this.config.deleted = true;
  //       }
  //       // else if (this._post.child.length < post.child.length) {
  //       //   this.config.replied = true;
  //       //   this.config.deleted = false;
  //       // }
  //       else if (this._post.child.length === post.child.length) {
  //         // Change only if is not modified by service
  //         if (this._post.child[0]._id) {
  //           // this.config.replied = false;
  //           // this.config.deleted = false;
  //         }
  //         else {
  //           this.config.replied = true;
  //           this.config.deleted = false;
  //         }
  //       }
  //       this._post = Object.assign({}, post);
  //     }
  //   }
  //   get post() {
  //     return this._post;
  //   }

  config = {
    showOpt: true,
    owner: false,
    replied: false,
    publishing: false,
    deleted: false,
    liked: false,
    shared: false,
    reported: false,
    thread: false,
    tooltip: true,
    loading: false,
    empty: false
  }

  count = {
    replies: 0,
    likes: 0,
    shares: 0
  };

  mediaSelIdx = 0;

  constructor(
    private postsService: PostsService,
    // private time: TimeService,
    private modalService: ModalService,
    private token: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    // private lazyLoader: LazyLoaderService,
    private cd: ChangeDetectorRef,
    private navbarService: NavbarService
    // private tooltip: TooltipService
  ) { }


  ngOnInit(): void {
  }

  ngOnChanges(changes) {

    // console.group('--------------')
    // for (let c in changes) {
    //   if (!changes[c].firstChange) {
    //     console.log('Prev:', changes[c].previousValue);
    //     console.log('Curr:', changes[c].currentValue);
    //   }
    // }
    // console.groupEnd();


    const different = changes.post?.previousValue?._id !== changes.post?.currentValue._id
    if (!changes.post?.firstChange && different) {
      // Reset values when changing posts
      
      this.config = Object.assign(this.config, this._inputConfig);

      if (this._post.media && this._post.media.length !== 0 && !this._post.media.selectedIndex) {
        this._post.media.unshift({selectedIndex: 1});
      }
      this.config.replied = false;
      this.config.deleted = false;
    }
  }

  ngOnDestroy() {
  }

  // private loadConfig(data) {
  //   const uid = this.token.getUserId();
  //   data = this.auth(data, uid);

  //   if (data.confirm) {
  //     this.config = Object.assign(this.config, data.confirm);
  //     this.config = Object.assign(this.config, this._inputConfig);
  //   }
  //   return data;
  // }

  private countData(data) {
    this.count = {
      replies: data.child?.length || 0,
      likes: data.likes,
      shares: 0 // not added yet
    };
  }

  private auth(post, uid?) {
    // Set owner only if uid corresponds and is not overwritten by inputConfig
    this.config.owner = (post.owner._id === uid) && 
                        (!this.inputConfig.hasOwnProperty('owner') || this.inputConfig.owner);
    if (uid) {
      post.confirm = {
        owner: post.owner._id === uid,
        liked: post.whoLiked.includes(uid)
      }
    }
    return post;
  }

  replyingProgress = 0;
  onReply() {
    if (!this.checkAuth('In order to reply a post you need to be logged in')) return;
    // this.modal.open('PostsModule', 'PostPublishComponent', 
    //   {
    //     postReply: this.post, 
    //     destinationConfig: this.publishConfig
    //   });
    // this.modal.waitForResponse().subscribe(res => {
    //   if (res) {
    //     this.count.replies += 1;
    //     this.config.replied = true;
    //   }
    // })

    const params = {postReply: this.post, destinationConfig: this.publishConfig};
    const content = [
      { module: 'Posts', component:'PostPublish', params}
    ];
    const modal = {type: 'default', content};
    const location = {action: 'add', name: ['Publish', 'Reply']};
    this.modalService.open(modal, location, (res) => {
      if (!res) {

        this.config.replied = false;
        this.config.publishing = true;
        // Now, reply is being published, so we can change location to indicate that
        this.locationService.removeItemFromStack(2);
        this.locationService.addItemToStack(['Publishing reply...'])
      } 
      else if (res && res.hasOwnProperty('progress')) {
        this.replyingProgress = res.progress;
      }
      else {
        this.count.replies += 1;
        this.config.publishing = false;
        this.config.replied = true;
        this.replyingProgress = 0;

        // In this cases (or destionation==0 too), parent child is not updated,
        // so we must do it manually
        if (['list', 'reply'].includes(this.contextInfo?.type) ) {
          this.post.child.push(res);
        }
      }
    });
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

  openReplyPage() {
    this.postsService.setMainPost({...this.post}, this.contextInfo);
    this.navbarService.go('/post/'+this.post._id);
  }

  checkAuth(message) {
    if (!this.token.isLogged()) {
      // this.modal.addMessage(message);
      // this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
      return false;
    } else {
      return true;
    }
  }

  @ViewChild('img') img:ElementRef
  openTooltip(event) {
    const a = this.img.nativeElement.getBoundingClientRect();
    console.log(a)

    // this.img.nativeElement.style.zIndex = '10';
    // const start = a.y;
    // const x = a.x + a.width / 2;
    // const y = a.y + a.height;
    // console.log(X, Y, start)
    // this.tooltip.open(event.clientX, event.clientY, 'AuthModule', 'LoginComponent');
    // this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', {user: this.post.owner});
    // this.tooltip.open(start, X, Y, 'AuthModule', 'LogoutComponent', {user: this.post.owner});
    // this.tooltip.open(start, X, Y, 'PostsModule', 'PostComponent', {post: this.post});

    const content = [
      // { title: 'You have nothing to do here' },
      { module: 'Profile', component:'ProfileCard', params: {user: this.post.owner}}
      // { module: 'Auth', component:'Logout'}
    ];
    // const params = {wS:300, hS:200, top:a.top, left:a.left};
    const wS = a.width+30;
    const hS = a.height+30;
    const top = 2
    const params = {objDimensions: a};
    const modal = {type: 'tooltip', content, params, keepOpened:true};
    const location = {action: 'set', name: ['ACCOUNT']};
    this.modalService.open(modal, location);
  }

  closeTooltip(a) {
    console.log(a)
    return;
    // this.tooltip.close();
    this.img.nativeElement.style.zIndex = '2';
  }

  openMedia(src) {
    const content = [
      { title: `Media from @${this.post.owner.username}` },
      { html: `<img width="100%" src="${src}">` }
    ]

    const modal = {type: 'extended', content};
    const location = {action: 'add', name: ['Media']};
    this.modalService.open(modal, location);
  }

}

