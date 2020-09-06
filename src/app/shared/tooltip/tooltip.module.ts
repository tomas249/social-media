import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipWrapperComponent } from './tooltip-wrapper/tooltip-wrapper.component';



@NgModule({
  declarations: [TooltipComponent, TooltipWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [TooltipComponent, TooltipWrapperComponent]
})
export class TooltipModule { }
