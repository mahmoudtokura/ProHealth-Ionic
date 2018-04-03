import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ChangeHospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-hospital',
  templateUrl: 'change-hospital.html',
})
export class ChangeHospitalPage {

  name = ""
  phone_number = ""
  scheme_number = ""
  id_number = ""
  email = ""
  present_hospital = ""
  new_hospital = ""
  message = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {

  }

  sendEmail(){
    let fullMessage = "Name: "+this.name + "<br><br>" + "Phone Number: "+this.phone_number + "<br><br>" + "Scheme Id No: "+this.scheme_number + "<br><br>" + "Id No: "+this.id_number + "<br><br>" + "Email: "+this.email + "<br><br>" + "Present Hospital: "+ this.present_hospital + "<br><br>" + "New Hospital: " + this.new_hospital + "<br><br>" +"Reason for change: "+this.message
    let email = {
      to: 'mahmoudbintokura@gmail.com',
      cc: 'imopumping@gmail.com',
      bcc: this.email,
      subject: 'Change Hospital Request from mobile app',
      body: fullMessage,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeHospitalPage');
  }

}
