import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardSelectComponent } from './dashboard-select/dashboard-select.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardConfirmComponent } from './dashboard-confirm/dashboard-confirm.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'select', pathMatch: 'full' },
      { path: 'select', component: DashboardSelectComponent },
      { path: 'edit', component: DashboardEditComponent },
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent, DashboardSelectComponent, DashboardEditComponent, DashboardConfirmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {
  static components = {
    DashboardSelectComponent,
    DashboardEditComponent,
    DashboardConfirmComponent
  }
}
