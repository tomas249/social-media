"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var posts_routing_module_1 = require("./posts-routing.module");
var posts_component_1 = require("./posts.component");
var post_component_1 = require("./post/post.component");
var post_publish_component_1 = require("./post-publish/post-publish.component");
var posts_list_component_1 = require("./posts-list/posts-list.component");
var post_article_component_1 = require("./post-article/post-article.component");
var modal_module_1 = require("src/app/shared/modal/modal.module");
// import { ProfileModule } from 'src/app/modules/profile/profile.module';
var tooltip_module_1 = require("src/app/shared/tooltip/tooltip.module");
var pipes_module_1 = require("src/app/pipes/pipes.module");
var post_home_component_1 = require("./post-home/post-home.component");
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule.components = {
        PostComponent: post_component_1.PostComponent,
        PostPublishComponent: post_publish_component_1.PostPublishComponent,
        PostsListComponent: posts_list_component_1.PostsListComponent
    };
    PostsModule = __decorate([
        core_1.NgModule({
            declarations: [
                post_component_1.PostComponent,
                post_publish_component_1.PostPublishComponent,
                posts_list_component_1.PostsListComponent,
                post_article_component_1.PostArticleComponent,
                posts_component_1.PostsComponent,
                post_home_component_1.PostHomeComponent
            ],
            imports: [
                common_1.CommonModule,
                posts_routing_module_1.PostsRoutingModule,
                modal_module_1.ModalModule,
                pipes_module_1.PipesModule,
                tooltip_module_1.TooltipModule
            ]
        })
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
