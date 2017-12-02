import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpProvider {

  baseUrl: string;

  constructor(public http: HttpClient) {
    console.log('Hello WpProvider Provider');
    this.baseUrl = "http://pro-health.gizodynamics.com.ng/wp-json/wp/v2/posts?categories=29";
  }

  getPost(){
    return this.http.get(this.baseUrl);
  }

}
