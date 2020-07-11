import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        loadChildren: () => 
          import('src/app/modules/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
