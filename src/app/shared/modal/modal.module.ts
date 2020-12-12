import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalDefaultComponent } from './modal-default/modal-default.component';
import { ModalExtendedComponent } from './modal-extended/modal-extended.component';
import { ModalTooltipComponent } from './modal-tooltip/modal-tooltip.component';
import { TooltipWrapperComponent } from './modal-tooltip/tooltip-wrapper/tooltip-wrapper.component';



@NgModule({
  declarations: [ModalComponent, ModalDefaultComponent, ModalExtendedComponent, ModalTooltipComponent, TooltipWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    ModalDefaultComponent,
    ModalExtendedComponent,
    ModalTooltipComponent,
    TooltipWrapperComponent
  ]
})
export class ModalModule { }
