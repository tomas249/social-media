"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var posts_list_component_1 = require("./posts-list/posts-list.component");
var post_article_component_1 = require("./post-article/post-article.component");
var post_home_component_1 = require("./post-home/post-home.component");
var routes = [
    {
        path: 'explore',
        component: posts_list_component_1.PostsListComponent
    },
    {
        path: 'home',
        component: post_home_component_1.PostHomeComponent
    },
    {
        path: 'post/:postId',
        component: post_article_component_1.PostArticleComponent
    }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());
exports.PostsRoutingModule = PostsRoutingModule;
