import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 *  Load all layouts in a lazy way
 */

const routes: Routes = [
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
