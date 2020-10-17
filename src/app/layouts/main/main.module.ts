import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

// Providers
import { LocationService } from 'src/app/services/location.service';

// Modules
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { TooltipModule } from 'src/app/shared/tooltip/tooltip.module';

import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    TooltipModule,
    NavbarModule,
    MainRoutingModule
  ],
  providers: [LocationService]
})
export class MainModule { }
