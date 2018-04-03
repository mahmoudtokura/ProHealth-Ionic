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
      "title":"What is the coverage of medical services under the health insurance scheme",
      "answer":"Benefit coverage is subject to the content of health plan an enrolee is registered for."
    },
    {
      "title":"What is the maximum number of enrolees that make up a family plan?",
      "answer":"Family plan is the principal, spouse and four biological children."
    },
    {
      "title":"Can one register non biological child? ",
      "answer":"Yes, where there is prove of legal adoption.."
    },
    {
      "title":"What is the age limit for children dependants under the scheme? ",
      "answer":"18 years."
    },
    {
      "title":"Whether a principal can register his parent and siblings under the family plan? ",
      "answer":"No, the principal can subscribe to separate health plan for parent and siblings."
    },
    {
      "title":"What is the importance of the ID card?",
      "answer":"ID card issued to beneficiaries under the scheme is their means of accessing care at the hospital."
    },
    {
      "title":"Is there provision for replacement of new ID card in event of loss?",
      "answer":"Yes, on the payment of a token."
    },
    {
      "title":"Can an enrolee give his ID card to another person to access care?",
      "answer":"No. ID card is strictly for the use of holder."
    },
    {
      "title":"How do we get back to the HMO when dissatisfied with the quality of medical care received from the hospital?",
      "answer":"Call 0700PROHEALTH – 0700776432584, fill the complaint form inside this app or send complaint directly to operations@prohealthhmo.com"
    },
    {
      "title":"In the case of an emergency where the enrolee is not near his health care provider, what will happen?",
      "answer":"The enrolee should access care at the nearest hospital on the HMO directory or any other hospital and contact us within 48 hour to report the emergency."
    },
    {
      "title":"Is premium paid refundable?",
      "answer":"No."
    },
    {
      "title":"Can an enrolee access care when he is out of his primary place of residence?",
      "answer":"Call 0700PROHEALTH – 0700776432584 for guide on the nearest hospital on the HMO directory."
    },
    {
      "title":"How do I change my hospital?",
      "answer":"Fill the change of hospilat form inside this app or send application directly to operations@prohealthhmo.com."
    },
    {
      "title":"What is the limit to surgery and surgical care services?",
      "answer":"Subject to health plan."
    },
    {
      "title":"When your family are away from you, which HCP would they used?",
      "answer":"Register family members not in same location with the principal in Hospital where they are resident."
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
