import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostPublishComponent } from './post-publish/post-publish.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostArticleComponent } from './post-article/post-article.component';

import { ModalModule } from 'src/app/shared/modal/modal.module';
import { ProfileModule } from 'src/app/modules/profile/profile.module';

import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { UserPipe } from 'src/app/pipes/user.pipe';
@NgModule({
  declarations: [
    DateAgoPipe,
    UserPipe,
    PostComponent,
    PostPublishComponent,
    PostsListComponent,
    PostArticleComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    ProfileModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { 
  static components = {
    PostComponent,
    PostPublishComponent,
    PostsListComponent
  }
}
