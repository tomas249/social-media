import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'full',
    loadChildren: () => import('./layouts/full/full.module')
      .then(m => m.FullModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/main/main.module')
      .then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
