"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsListComponent = void 0;
var core_1 = require("@angular/core");
var PostsListComponent = /** @class */ (function () {
    function PostsListComponent(postsService, locationService, token, modal) {
        this.postsService = postsService;
        this.locationService = locationService;
        this.token = token;
        this.modal = modal;
        this.searchParams = null;
        this.allowExploreSearch = true;
        this.noLoggedMssg = 'Auth in order to post';
        this.loading = true;
        this.isLogged = false;
    }
    PostsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token.user$.subscribe(function (res) {
            _this.isLogged = !!res;
            if (_this.isLogged && !_this.loading) {
                _this.postsList = _this.postsList.map(function (p) { return Object.assign({}, p); });
                // this.modal.close();
            }
        });
        this.postsList$ = this.postsService.updatedPosts$.subscribe(function (res) {
            _this.postsList = res;
            _this.loading = false;
        });
        if (!this.allowExploreSearch) {
            this.postsService.getAllPosts(this.searchParams);
        }
        else {
            this.postsService.getAllPosts();
            this.locationService.finishComposition();
            // this.locationService.addChildLoc('Explore', {extend: false});
        }
    };
    PostsListComponent.prototype.ngOnDestroy = function () {
        if (!this.searchParams) {
            // this.locationService.removeChildLoc(true);
        }
        this.postsService.changePostsList([]);
        this.postsList = null;
        this.loading = true;
        this.postsList$.unsubscribe();
    };
    PostsListComponent.prototype.auth = function (componentName) {
        // this.modal.open('default', [{module: 'AuthModule', component: componentName}]);
        // this.modal.addMessage('Auth in order to post');
        // this.modal.open('AuthModule', componentName, {navigateEnd: false});
    };
    __decorate([
        core_1.Input()
    ], PostsListComponent.prototype, "searchParams");
    __decorate([
        core_1.Input()
    ], PostsListComponent.prototype, "allowExploreSearch");
    __decorate([
        core_1.Input()
    ], PostsListComponent.prototype, "noLoggedMssg");
    PostsListComponent = __decorate([
        core_1.Component({
            selector: 'app-posts-list',
            templateUrl: './posts-list.component.html',
            styleUrls: ['./posts-list.component.css']
        })
    ], PostsListComponent);
    return PostsListComponent;
}());
exports.PostsListComponent = PostsListComponent;
