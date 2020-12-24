import { Component, OnInit, Input, ViewChild, OnChanges, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PostsService } from '../posts.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { TokenService } from 'src/app/services/token.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges {

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
        this._post = {...post};
      }
    }
    get post() {
      return this._post;
    }

  config = {
    showOpt: true,
    openPage: true,
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
    private modalService: ModalService,
    private token: TokenService,
    private locationService: LocationService,
    private navbarService: NavbarService,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
  }

  ngOnChanges(changes) {
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
    this.config.liked = post.whoLiked.includes(uid);
    if (uid) {
      post.confirm = {
        owner: this.config.owner,
        liked: this.config.liked
      }
    }
    return post;
  }

  goToUser(uid) {
    if (!this.config.showOpt) return;
    this.navbarService.go(`/u/${uid}`);
  }

  replyingProgress = 0;
  onReply() {
    if (!this.checkAuth('In order to reply a post you need to be logged in')) return;

    const params = {postReply: this.post, destinationConfig: this.publishConfig};
    const content = [
      { module: 'Posts', component:'PostPublish', params}
    ];
    const modal = {type: 'default', content};
    const location = {action: 'add', stack: ['Reply']};
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
    if (!this.config.openPage) return;
    this.modalService.forceClose();
    this.postsService.setMainPost({...this.post}, this.contextInfo);
    this.navbarService.go('/post/'+this.post._id);
  }

  onShare() {
    const url = `${window.location.host}/p/${this.post._id}`; 
    const modal = {type: 'default', content: [
      { title: 'Share a post' },
      { html: `<p align="center">${url}</p>` }
    ]};
    const location = {action: 'add', stack: ['Share']};
    this.modalService.open(modal, location);
  }

  @ViewChild('avatarAnimation') avatarAnimation: ElementRef;
  triggerTooltip = null;
  tooltipOpened = false;
  onOpenUser() {
    if (this.tooltipOpened || !this.config.showOpt) return;
    this.triggerTooltip = true;
  }

  onCloseUser() {
    this.triggerTooltip = false;
  }

  checkTooltipStatus(event) {
    this.tooltipOpened = event;
    if (event) {
      this.avatarAnimation.nativeElement.className = 'loading-avatar';
    }
    else {
      this.renderer.removeClass(this.avatarAnimation.nativeElement, 'loading-avatar');
    }
  }

  checkAuth(message) {
    if (this.token.isLogged()) {
      return true;
    }
    else {
      const modal = {type: 'default', content: [
        { title: message },
        { module: 'Auth', component: 'Login', params: {navigateEnd: false} }
      ]};
      const location = {action: 'add', stack: ['Login']};
      this.modalService.open(modal, location);
      return false
    }
  }

  openMedia(src) {
    const content = [
      { title: `Media from @${this.post.owner.username}` },
      { html: `<img width="100%" src="${src}">` }
    ]

    const modal = {type: 'extended', content};
    const location = {action: 'add', stack: ['Media']};
    this.modalService.open(modal, location);
  }

}

