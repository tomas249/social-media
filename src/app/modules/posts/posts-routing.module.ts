import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PostsComponent } from './posts.component'; // Main
import { PostComponent } from './post/post.component';
import { PostPublishComponent } from './post-publish/post-publish.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostArticleComponent } from './post-article/post-article.component';

const routes: Routes = [
  { 
    path: 'post/:postId',
    component: PostArticleComponent,
  },
  { 
    path: ':page', 
    component: PostsPageComponent
  },
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
