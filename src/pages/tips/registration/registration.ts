import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  name = ""
  phone_number = ""
  email = ""
  message = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {

  }

  sendEmail(){
    let fullMessage = "Name: "+this.name + "<br><br>" +  "Email: "+this.email + "<br><br>" + "Message: "+this.message
    let email = {
      to: 'enquiry@prohealthhmo.com',
      cc: 'operations@prohealthhmo.com',
      bcc: this.email,
      subject: 'Registration Request from mobile app',
      body: fullMessage,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
