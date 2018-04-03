import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

  items = [
    {
      "title":"How to get a plan",
      "answer":"You can browse through our website and download our PDF brochures or contact our customer care to get information on what plan best fit your lifestyle or organization."
    },
    {
      "title":"How to change a plan",
      "answer":"You can send us an email through this app or directly enquiry@prohealthhmo.com with you client ID and relevant information and one of our" + 
      " customer care representatives will contact with 24hours of receiving the email to discuss avaliable plans that" + 
      " will better suit your need" + 
      " You can also contact us via phone 0700776432584 to change or update your account information."
    },
    {
      "title":"How to change a hospital",
      "answer":"You can send us an email through this app or directly enquiry@prohealthhmo.com with you client ID and relevant information and one of our" + 
      " customer care representatives will contact with 24hours of receiving the email to discuss avaliable hospital based" + 
      " on you unique medical needs and also future projects for the health care providers" + 
      " You can also contact us via phone 0700776432584 to change or update your account information."
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  itemSelected(item){
    this.navCtrl.push('FaqAnswersPage',{item: item})
  }

  sendEmail(){
    let email = {
      to: "enquiry@prohealthhmo.com",
      cc: "info@prohealthhmo.com",
      subject: "Customer Service from App",
      body: "Existing clients should include their, client ID and Name in this email"
    };
    this.emailComposer.open(email);
  }

}
