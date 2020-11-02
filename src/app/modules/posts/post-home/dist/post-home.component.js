"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostHomeComponent = void 0;
var core_1 = require("@angular/core");
var PostHomeComponent = /** @class */ (function () {
    function PostHomeComponent(postsService, locationService, token, modal) {
        this.postsService = postsService;
        this.locationService = locationService;
        this.token = token;
        this.modal = modal;
        this.isLogged = false;
        this.loading = true;
    }
    PostHomeComponent.prototype.ngOnInit = function () {
        this.locationService.finishComposition();
        this.postsService.allowSearch = false;
        // this.locationService.addChildLoc('Home', {extend: false});
        // this.token.subscribeAcc().subscribe(
        //   res => {
        //     this.isLogged = !!res;
        //     if (this.isLogged && this.loading) {
        //       this.loading = false;
        //       this.postsService.getFollowersPosts();
        //     }
        //   }
        // );
    };
    PostHomeComponent.prototype.ngOnDestroy = function () {
        this.postsService.allowSearch = true;
        // this.locationService.removeChildLoc(true);
    };
    PostHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-post-home',
            templateUrl: './post-home.component.html',
            styleUrls: ['./post-home.component.css']
        })
    ], PostHomeComponent);
    return PostHomeComponent;
}());
exports.PostHomeComponent = PostHomeComponent;
