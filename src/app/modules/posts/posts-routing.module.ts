import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PostsComponent } from './posts.component'; // Main
import { PostComponent } from './post/post.component';
import { PostPublishComponent } from './post-publish/post-publish.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostArticleComponent } from './post-article/post-article.component';

const routes: Routes = [
  { 
    path: 'explore', 
    component: PostsListComponent,
    data: { queryUrl: '/posts?parent[size]=0&childLevel=0&[limit]=13' }
  },
  { 
    path: 'home', 
    component: PostsListComponent,
    data: { queryUrl: '/posts/user' }
  },
  { 
    path: 'post/:postId',
    component: PostArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
