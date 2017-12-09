import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";
import { CacheService } from 'ionic-cache';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  post: Observable<any>;
  postKey = 'my-post-group'
  
  loading = 1;
  loadingTime = 1;
  loadingError = "Check your internet connection";

  postSubscribe: Subscription;
  wordPressData: Observable<any>;
  postImage="assets/imgs/images/logo.png";

  constructor(public navCtrl: NavController, private cache: CacheService, public http: HttpClient, private toastCtrl: ToastController) {  
    this.getPost()
    if(this.wordPressData == null || this.wordPressData == undefined ){
      this.loading=0;
      this.loadingTime=0;
    }
  }

  getPost(refresher?){
    this.loading = 0;
    let baseUrl = "http://pro-health.gizodynamics.com.ng/wp-json/wp/v2/posts?categories=29";
    let toast = this.toastCtrl.create({
      message: 'Loading data from server ....',
      duration: 2000
    })
    toast.present();
    let req = this.http.get(baseUrl)
    .map( resp => {
      this.loading=1;
      return resp
    });
    
    let ttl = 60 * 60 * 12

    if(refresher){
      let delayType = 'all';
      this.wordPressData = this.cache.loadFromDelayedObservable(baseUrl, req, this.postKey, ttl, delayType);

      this.wordPressData.subscribe(data => {
        this.loading=1;
        refresher.complete()
      });
      console.log(this.wordPressData)
    }
    else{
      this.wordPressData = this.cache.loadFromObservable(baseUrl, req, this.postKey, ttl);
      this.loading=1;
      console.log(this.wordPressData)
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

