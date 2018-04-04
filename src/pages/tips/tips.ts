import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
  }

  // goToFitness(){
  //   console.log("Fitness Called")
  //   this.navCtrl.push("FitnessTipsPage")
  // }

  goToTip(){
    this.navCtrl.push("TipInfoPage")
  }

  changeHospital(){
    this.navCtrl.push("ChangeHospitalPage");
    
  }

  questions(){
    this.navCtrl.push("QuestionsPage");
  }

  planspage(){
    this.navCtrl.push('PlansPage')
  }

  feedbackpage(){
    this.navCtrl.push('FeedbackPage')
  }
  
  registrationpage(){
    this.navCtrl.push('RegistrationPage')
  }

  aboutapp(){
    this.navCtrl.push('AboutAppPage')
  }

}
