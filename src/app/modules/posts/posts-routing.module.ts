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
    path: 'explore', 
    component: PostsPageComponent,
    data: {
      page: 'explore',
      query: '/posts?parent[size]=0&childLevel=0&[limit]=10',
      auth: false
    }
  },
  { 
    path: 'home', 
    component: PostsPageComponent,
    data: {
      path: 'home',
      query: '/posts/user',
      auth: true
    }
  },
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/explore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
