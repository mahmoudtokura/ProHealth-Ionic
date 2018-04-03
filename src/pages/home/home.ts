import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';
import { WpProvider } from '../../providers/wp/wp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  post: Observable<any>;
  postKey = 'my-post-group'
  
  loading = 1;
  loadingTime = 1;

  postSubscribe: Subscription;
  wordPressData;
  postImage="assets/imgs/images/logo.png";

  constructor(public navCtrl: NavController, private wp: WpProvider, private toastCtrl: ToastController) {  
    this.getPost()
    if(this.wordPressData == null || this.wordPressData == undefined ){
      this.loading=1;
      this.loadingTime=1;
    }
    else{
      this.loading=0;
      this.loadingTime=0;
    }
  }

  getPost(refresher?){
    this.loading = 0;
    this.wp.getPost().subscribe(data => {
      this.wordPressData = data;
      setTimeout(() => {
        if(this.wordPressData == null || this.wordPressData == undefined ){
          let errorToast = this.toastCtrl.create({
            message: 'Slow network, check connection....',
            duration: 5000
          });
          errorToast.present();
        }
      }, 3000);
    });

    let toast = this.toastCtrl.create({
      message: 'Loading latest news ....',
      duration: 3000
    });

    toast.present();

    if(refresher){
      this.wp.getPost().subscribe(data => {
        this.loading=1;
        this.wordPressData = data;
        refresher.complete()
      });
    }
    else{
      this.loading=1;
    }

  }
  

  ionViewWillEnter(){
    
  }

  doRefresh(refresher) {

    this.getPost(refresher)
  }

  fullPost(data){
    this.navCtrl.push('FullPostPage', {data: data})
  }
}

