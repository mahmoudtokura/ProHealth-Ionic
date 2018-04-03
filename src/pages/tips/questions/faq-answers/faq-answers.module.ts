import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqAnswersPage } from './faq-answers';

@NgModule({
  declarations: [
    FaqAnswersPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqAnswersPage),
  ],
})
export class FaqAnswersPageModule {}
