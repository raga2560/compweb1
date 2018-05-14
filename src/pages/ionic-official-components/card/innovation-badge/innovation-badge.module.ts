import { InnovationBadgePage } from './innovation-badge';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    InnovationBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(InnovationBadgePage),
  ],
  exports: [
    InnovationBadgePage
  ]
})

export class InnovationBadgePageModule { }
