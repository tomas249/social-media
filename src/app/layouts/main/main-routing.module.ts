import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/explore',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
