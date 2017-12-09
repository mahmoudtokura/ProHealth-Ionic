import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the WpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpProvider {

  baseUrl = "http://pro-health.gizodynamics.com.ng/wp-json/wp/v2/posts?categories=29";

  post: Observable<any>;
  postKey = 'my-post-group'

  constructor(public http: HttpClient, private toastCtrl: ToastController) {
    console.log('Hello WpProvider Provider');
  }

  getPost(){
    console.log("getPost() called")
    let cacheKey = this.baseUrl;
    
    let req = this.http.get(this.baseUrl).map( resp => {
      let toast = this.toastCtrl.create({
        message: 'Loading data from server ....',
        duration: 2000
      })
      toast.present();
      return resp
    });
    
    
    return this.post
  }

}
