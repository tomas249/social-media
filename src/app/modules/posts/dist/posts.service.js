"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var PostsService = /** @class */ (function () {
    function PostsService(api, token, modal, uploadFile) {
        this.api = api;
        this.token = token;
        this.modal = modal;
        this.uploadFile = uploadFile;
        this.allowSearch = true;
        this.postsList = [];
        this.updatedPosts$ = new rxjs_1.BehaviorSubject(this.postsList);
    }
    PostsService.prototype.getPostById = function (postId) {
        return this.api.get("/posts?_id=" + postId + "&childLevel=3").pipe(
        // Filter always returns array and we are searching only 1 post
        operators_1.map(function (res) { return res.data.data[0]; }));
    };
    PostsService.prototype.changePostsList = function (postsList) {
        this.postsList = postsList.reverse();
        this.updatedPosts$.next(this.postsList);
    };
    PostsService.prototype.getAllPosts = function (params) {
        var _this = this;
        if (!this.allowSearch)
            return;
        params = params || '?parent[size]=0&childLevel=3';
        this.api.get('/posts' + params).subscribe(function (res) {
            _this.postsList = res.data.data;
            _this.updatedPosts$.next(_this.postsList);
        });
    };
    PostsService.prototype.getFollowersPosts = function () {
        var _this = this;
        this.api.get("/posts/user").subscribe(function (res) {
            _this.postsList = res.data;
            _this.updatedPosts$.next(_this.postsList);
        });
    };
    PostsService.prototype.deletePost = function (postId, config) {
        var _this = this;
        this.checkAuth();
        this.api["delete"]("/posts/" + postId).subscribe(function (res) {
            _this.removeFromList(config);
        });
    };
    PostsService.prototype.publishPost = function (post, config) {
        var _this = this;
        this.checkAuth();
        var path = '/posts';
        this.api.post(path, post).subscribe(function (res) {
            _this.addToList(res.data, config);
        }, function (err) { return console.error(err); });
    };
    PostsService.prototype.replyPost = function (postId, post, config) {
        var _this = this;
        this.checkAuth();
        var path = "/posts/" + postId + "/reply";
        this.api.post(path, post).subscribe(function (res) {
            _this.addToList(res.data, config);
        }, function (err) { return console.error(err); });
    };
    PostsService.prototype.addToList = function (post, config) {
        if (config.destination === 1) {
            if (config.end) {
                this.postsList.push(post);
            }
            else {
                this.postsList.unshift(post);
            }
        }
        else if (config.destination === 2) {
            console.log(config);
            if (config.end) {
                this.postsList[config.parentIndex].child.push(post);
            }
            else {
                this.postsList[config.parentIndex].child.unshift(post);
            }
        }
        if (config.destination !== 0) {
            this.updatedPosts$.next(this.postsList);
        }
    };
    PostsService.prototype.removeFromList = function (config) {
        if (config.destination === 1) {
            this.postsList.splice(config.parentIndex, 1);
        }
        else if (config.destination === 2) {
            this.postsList[config.parentIndex].child.splice(config.childIndex, 1);
        }
        if (config.destination !== 0) {
            this.updatedPosts$.next(this.postsList);
        }
    };
    PostsService.prototype.likePost = function (postId) {
        this.checkAuth();
        this.api.get("/posts/" + postId + "/like").subscribe();
    };
    PostsService.prototype.getPop = function (obj) {
        if (!obj.child) {
            return ' null ';
        }
        else if (obj.child.length === 0) {
            return ' empty';
        }
        else {
            return " pop(" + obj.child.length + ") >" + this.getPop(obj.child[0]);
        }
    };
    PostsService.prototype.checkAuth = function () {
        if (!this.token.isLogged()) {
            console.error('Please login');
            // this.modal.addMessage('In order to reply or like, you need to login');
            // this.modal.open('AuthModule', 'LoginComponent')
            return rxjs_1.throwError('');
        }
    };
    PostsService.prototype.uploadGallery = function (gallery) {
        var _this = this;
        var fd = new FormData();
        gallery.forEach(function (image) {
            fd.append('gallery', image);
        });
        var opt = this.uploadFile.getOptions();
        // Upload all images to get their url
        return this.api.post('/files/uploadGallery', fd, opt).pipe(operators_1.map(function (event) {
            var res = _this.uploadFile.getProgress(event);
            if (!res.completedUpload) {
                return res;
            }
            else {
                // Expected response is an array of all images
                // with their new filename
                var gallery_1 = res.data;
                return {
                    completed: true,
                    message: res.message,
                    gallery: gallery_1
                };
            }
        }));
    };
    PostsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
