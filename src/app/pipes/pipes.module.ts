import { NgModule } from '@angular/core';

import { DateAgoPipe } from './date-ago.pipe';
import { UserPipe } from './user.pipe';

@NgModule({
  declarations: [
    DateAgoPipe, 
    UserPipe
  ],
  exports: [
    DateAgoPipe,
    UserPipe
  ]
})
export class PipesModule { }
