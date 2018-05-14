import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseCardPage } from './purchase-card';

@NgModule({
  declarations: [
    PurchaseCardPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseCardPage),
  ],
  exports: [
    PurchaseCardPage
  ]
})
export class PurchaseCardPageModule {}
