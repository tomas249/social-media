import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalDefaultComponent } from './modal-default/modal-default.component';
import { ModalExtendedComponent } from './modal-extended/modal-extended.component';



@NgModule({
  declarations: [ModalComponent, ModalDefaultComponent, ModalExtendedComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ModalDefaultComponent,
    ModalExtendedComponent
  ]
})
export class ModalModule { }
