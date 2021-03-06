import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  name = ""
  phone_number = ""
  message = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {

  }

  sendEmail(){
    let fullMessage = "Name: " + this.name + "<br><br>" + "Phone Number: " + this.phone_number + "<br><br>" +"Message: "+this.message
    let email = {
      to: 'enquiry@prohealthhmo.com',
      cc: 'operations@prohealthhmo.com',
      subject: 'Feedback from mobile app',
      body: fullMessage,
      isHtml: true
    };
    this.emailComposer.open(email);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
