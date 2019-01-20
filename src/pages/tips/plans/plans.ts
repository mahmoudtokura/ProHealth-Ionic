import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser";

/**
 * Generated class for the PlansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-plans",
  templateUrl: "plans.html"
})
export class PlansPage {
  url: string = "http://pro-health.gizodynamics.com.ng/";
  diamondUrl: string =
    "http://prohealthhmo.com.ng/portfolio-item/diamond-plan/";
  rubyUrl: string = "http://prohealthhmo.com.ng/portfolio-item/ruby-plan/";
  emeraldUrl: string =
    "http://prohealthhmo.com.ng/portfolio-item/emerald-plan/";
  perlUrl: string = "http://prohealthhmo.com.ng/portfolio-item/perl-plan/";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inAppBrowser: InAppBrowser
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlansPage");
  }

  openWebpage() {
    const options: InAppBrowserOptions = {
      zoom: "no"
    };

    // Opening a URL and returning an InAppBrowserObject
    this.inAppBrowser.create(this.url, "_system", options);

    // Inject scripts, css and more with browser.X
  }

  goToPlan(planUrl) {
    const options: InAppBrowserOptions = {
      zoom: "no"
    };

    // Opening a URL and returning an InAppBrowserObject
    this.inAppBrowser.create(planUrl, "_system", options);

    // Inject scripts, css and more with browser.X
  }
}
