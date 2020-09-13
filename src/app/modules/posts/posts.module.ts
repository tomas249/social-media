import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostPublishComponent } from './post-publish/post-publish.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostArticleComponent } from './post-article/post-article.component';

import { ModalModule } from 'src/app/shared/modal/modal.module';
// import { ProfileModule } from 'src/app/modules/profile/profile.module';
import { TooltipModule } from 'src/app/shared/tooltip/tooltip.module';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { PostHomeComponent } from './post-home/post-home.component';

@NgModule({
  declarations: [
    PostComponent,
    PostPublishComponent,
    PostsListComponent,
    PostArticleComponent,
    PostsComponent,
    PostHomeComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ModalModule,
    PipesModule,
    TooltipModule
  ]
})
export class PostsModule { 
  static components = {
    PostComponent,
    PostPublishComponent,
    PostsListComponent
  }
}
