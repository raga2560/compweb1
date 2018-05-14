import { TrainingBadgePage } from './training-badge';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    TrainingBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingBadgePage),
  ],
  exports: [
    TrainingBadgePage
  ]
})

export class TrainingBadgePageModule { }
