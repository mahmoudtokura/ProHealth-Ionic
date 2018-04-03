import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipInfoPage } from './tip-info';

@NgModule({
  declarations: [
    TipInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TipInfoPage),
  ],
})
export class TipInfoPageModule {}
