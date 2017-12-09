import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  items = [
    {
      "title":"How to get a plan"
    },
    {
      "title":"How to change a plan"
    },
    {
      "title":"How to change a hospital"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  sendEmail(){
    let email = {
      to: "mahmoudbintokura@gmail.com",
      cc: "imopumping@gmail.com",
      subject: "Customer Service from App",
      body: "Testing email from app"
    };
    this.emailComposer.open(email);
  }

}
