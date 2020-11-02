"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostArticleComponent = void 0;
var core_1 = require("@angular/core");
var PostArticleComponent = /** @class */ (function () {
    function PostArticleComponent(route, postsService, locationService, cd, token, modal) {
        this.route = route;
        this.postsService = postsService;
        this.locationService = locationService;
        this.cd = cd;
        this.token = token;
        this.modal = modal;
        this.isLogged = false;
        this.reloadPost = false;
    }
    PostArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.token.subscribeAcc().subscribe(
        //   res => {
        //     if (res && this.parentPost) {
        //       this.modal.close();
        //       this.reloadPost = true;
        //       this.parentPost = Object.assign({}, this.parentPost);
        //       this.postsService.changePostsList(this.parentPost.child.reverse());
        //     }
        //   }
        // );
        this.route.params.subscribe(function (params) {
            var postId = params['postId'];
            _this.postsService.getPostById(postId).subscribe(function (res) {
                _this.parentPost = res;
                var isPost = _this.parentPost.parent.length === 0;
                // this.locationService.changeRootLoc(isPost ? 'Post' : 'Reply');
                _this.postsService.changePostsList(res.child);
                _this.parentPost$ = _this.postsService.updatedPosts$.subscribe(function (res) {
                    var child = res.map(function (c) { return Object.assign({}, c); });
                    _this.parentPost = Object.assign({}, _this.parentPost);
                    _this.parentPost = Object.assign(_this.parentPost, { child: child });
                });
            });
        });
    };
    PostArticleComponent.prototype.ngOnDestroy = function () {
        // this.locationService.removeChildLoc(true);
        this.parentPost$.unsubscribe();
        this.parentPost = null;
    };
    PostArticleComponent.prototype.onLoadUpperPost = function (parentIndex) {
        console.log(parentIndex);
    };
    PostArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-post-article',
            templateUrl: './post-article.component.html',
            styleUrls: ['./post-article.component.css']
        })
    ], PostArticleComponent);
    return PostArticleComponent;
}());
exports.PostArticleComponent = PostArticleComponent;
