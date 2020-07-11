import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { ModalComponent } from 'src/app/components/modal/modal.component';

// Providers
import { LocationService } from 'src/app/services/location.service';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [LocationService]
})
export class MainModule { }
