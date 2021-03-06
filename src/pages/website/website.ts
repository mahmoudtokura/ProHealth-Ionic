import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

/**
 * Generated class for the WebsitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-website',
  templateUrl: 'website.html',
})
export class WebsitePage {
  
  url: string = "http://pro-health.gizodynamics.com.ng/";

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebsitePage');
  }

  openWebpage() {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    this.inAppBrowser.create(this.url, '_system', options);

   // Inject scripts, css and more with browser.X
  }

}
