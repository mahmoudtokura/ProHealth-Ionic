import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeHospitalPage } from './change-hospital';

@NgModule({
  declarations: [
    ChangeHospitalPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeHospitalPage),
  ],
})
export class ChangeHospitalPageModule {}
