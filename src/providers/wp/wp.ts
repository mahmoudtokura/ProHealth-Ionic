import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the WpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpProvider {

  baseUrl = "http://prohealthhmo.com.ng/wp-json/wp/v2/posts?categories=29";
  tipsUrl = "http://prohealthhmo.com.ng/wp-json/wp/v2/posts?categories=81";

  constructor(public http: HttpClient) {
    console.log('Hello WpProvider Provider');
  }

  getPost(){    
    return this.http.get(this.baseUrl);
  }

  getTips(){  
    return this.http.get(this.tipsUrl);
  }
  

}
