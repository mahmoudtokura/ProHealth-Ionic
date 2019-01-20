import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";

/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tips",
  templateUrl: "tips.html"
})
export class TipsPage {
  name = "";
  phone_number = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TipsPage");
  }

  sendEmail() {
    let fullMessage =
      "Name: " + this.name + "<br><br>" + "Phone Number: " + this.phone_number;
    let email = {
      to: "enquiry@prohealthhmo.com",
      cc: "operations@prohealthhmo.com",
      subject: "Feedback from mobile app",
      body: fullMessage,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  goToTip() {
    this.navCtrl.push("TipInfoPage");
  }

  changeHospital() {
    this.navCtrl.push("ChangeHospitalPage");
  }

  questions() {
    this.navCtrl.push("QuestionsPage");
  }

  planspage() {
    this.navCtrl.push("PlansPage");
  }

  feedbackpage() {
    this.navCtrl.push("FeedbackPage");
  }

  registrationpage() {
    this.navCtrl.push("RegistrationPage");
  }

  aboutapp() {
    this.navCtrl.push("AboutAppPage");
  }
}
