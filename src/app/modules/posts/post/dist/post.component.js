"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostComponent = void 0;
var core_1 = require("@angular/core");
var PostComponent = /** @class */ (function () {
    function PostComponent(postsService, time, modal, token, router, route, lazyLoader, cd, tooltip) {
        this.postsService = postsService;
        this.time = time;
        this.modal = modal;
        this.token = token;
        this.router = router;
        this.route = route;
        this.lazyLoader = lazyLoader;
        this.cd = cd;
        this.tooltip = tooltip;
        this.reload = false;
        this.config = {
            showOpt: true,
            owner: false,
            replied: false,
            deleted: false,
            liked: false,
            shared: false,
            reported: false,
            thread: false,
            tooltip: true
        };
        this.count = {
            replies: 0,
            likes: 0,
            shares: 0
        };
    }
    Object.defineProperty(PostComponent.prototype, "inputConfig", {
        get: function () {
            return this.inputConfig;
        },
        set: function (inputConfig) {
            this._inputConfig = inputConfig;
            this.config = Object.assign(this.config, inputConfig);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostComponent.prototype, "post", {
        get: function () {
            return this._post;
        },
        set: function (post) {
            this.countData(post);
            if (post.media && post.media.length !== 0 && !post.media[0].selectedIndex) {
                post.media.unshift({ selectedIndex: 1 });
            }
            if (!this._post || (this._post && this.reload)) {
                this._post = this.loadConfig(post);
                this.reload = false;
            }
            else {
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
        },
        enumerable: false,
        configurable: true
    });
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.ngOnChanges = function (changes) {
        var _a, _b, _c, _d;
        var different = ((_b = (_a = changes.post) === null || _a === void 0 ? void 0 : _a.previousValue) === null || _b === void 0 ? void 0 : _b._id) !== ((_c = changes.post) === null || _c === void 0 ? void 0 : _c.currentValue._id);
        if (!((_d = changes.post) === null || _d === void 0 ? void 0 : _d.firstChange) && different) {
            // Reset values when changing posts
            this._post = this.loadConfig(changes.post.currentValue);
            if (this._post.media && this._post.media.length !== 0 && !this._post.media.selectedIndex) {
                this._post.media.unshift({ selectedIndex: 1 });
            }
            this.config.replied = false;
            this.config.deleted = false;
        }
        for (var date in changes) {
        }
    };
    PostComponent.prototype.ngOnDestroy = function () {
    };
    PostComponent.prototype.loadConfig = function (data) {
        var uid = this.token.getUserId();
        data = this.auth(data, uid);
        if (data.confirm) {
            this.config = Object.assign(this.config, data.confirm);
            this.config = Object.assign(this.config, this._inputConfig);
        }
        return data;
    };
    PostComponent.prototype.countData = function (data) {
        this.count = {
            replies: data.child.length,
            likes: data.likes,
            shares: 0 // not added yet
        };
    };
    PostComponent.prototype.auth = function (post, uid) {
        if (uid) {
            post.confirm = {
                owner: post.owner._id === uid,
                liked: post.whoLiked.includes(uid)
            };
        }
        return post;
    };
    PostComponent.prototype.onReply = function () {
        if (!this.checkAuth('In order to reply a post you need to be logged in'))
            return;
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
    };
    PostComponent.prototype.onLike = function () {
        console.warn(this.post);
        if (!this.checkAuth('In order to like a post you need to be logged in'))
            return;
        if (this.config.liked) {
            this.config.liked = false;
            this.count.likes -= 1;
        }
        else {
            this.config.liked = true;
            this.count.likes += 1;
        }
        this.postsService.likePost(this.post._id);
    };
    PostComponent.prototype.onDelete = function () {
        this.postsService.deletePost(this.post._id, this.deleteConfig);
    };
    PostComponent.prototype.checkAuth = function (message) {
        if (!this.token.isLogged()) {
            // this.modal.addMessage(message);
            // this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
            return false;
        }
        else {
            return true;
        }
    };
    PostComponent.prototype.openTooltip = function (event) {
        return;
        if (!this.config.tooltip)
            return;
        this.img.nativeElement.style.zIndex = '10';
        var a = this.img.nativeElement.getBoundingClientRect();
        // console.log(a)
        var start = a.y;
        var X = a.x + a.width / 2;
        var Y = a.y + a.height;
        // console.log(X, Y, start)
        // this.tooltip.open(event.clientX, event.clientY, 'AuthModule', 'LoginComponent');
        this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', { user: this.post.owner });
        // this.tooltip.open(start, X, Y, 'AuthModule', 'LogoutComponent', {user: this.post.owner});
        // this.tooltip.open(start, X, Y, 'PostsModule', 'PostComponent', {post: this.post});
    };
    PostComponent.prototype.closeTooltip = function () {
        return;
        this.tooltip.close();
        this.img.nativeElement.style.zIndex = '2';
    };
    __decorate([
        core_1.Input()
    ], PostComponent.prototype, "inputConfig");
    __decorate([
        core_1.Input()
    ], PostComponent.prototype, "publishConfig");
    __decorate([
        core_1.Input()
    ], PostComponent.prototype, "deleteConfig");
    __decorate([
        core_1.Input()
    ], PostComponent.prototype, "reload");
    __decorate([
        core_1.Input()
    ], PostComponent.prototype, "post");
    __decorate([
        core_1.ViewChild('img')
    ], PostComponent.prototype, "img");
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrls: ['./post.component.css']
        })
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
