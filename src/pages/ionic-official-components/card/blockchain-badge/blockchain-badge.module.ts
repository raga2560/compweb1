import { BlockchainBadgePage } from './blockchain-badge';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BlockchainBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(BlockchainBadgePage),
  ],
  exports: [
    BlockchainBadgePage
  ]
})

export class BlockchainBadgePageModule { }
