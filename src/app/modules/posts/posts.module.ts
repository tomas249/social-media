import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { PostPublishComponent } from './post-publish/post-publish.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostArticleComponent } from './post-article/post-article.component';

import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [
    PostComponent,
    PostPublishComponent,
    PostsListComponent,
    PostArticleComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
