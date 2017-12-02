import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WpProvider } from '../../providers/wp/wp';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  postSubscribe: Subscription;
  wordPressData: any;
  postImage="assets/images/icon-image/accident-2161956_640.jpg";

  constructor(public navCtrl: NavController, private wpData: WpProvider) {
    this.wpData.getPost().subscribe(data=>{
      this.wordPressData = data;
      console.log(this.wordPressData);
      });
  }

  ionViewWillEnter(){
      

  }

  fullPost(data){
    this.navCtrl.push("FullPostPage", {"data":data});    
  }
}
