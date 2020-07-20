import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostPublishComponent } from './post-publish/post-publish.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostArticleComponent } from './post-article/post-article.component';

import { ModalModule } from 'src/app/shared/modal/modal.module';
// import { AuthModule } from 'src/app/modules/auth/auth.module';

@NgModule({
  declarations: [
    PostComponent,
    PostPublishComponent,
    PostsListComponent,
    PostArticleComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    // AuthModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { 
  static components = {
    PostComponent,
    PostPublishComponent
  }
}
