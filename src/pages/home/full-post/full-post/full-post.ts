import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full-post',
  templateUrl: 'full-post.html',
})
export class FullPostPage {
  
  post: any = "";
  postImage="assets/images/icon-image/accident-2161956_640.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullPostPage');
    
  }

}
