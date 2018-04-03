import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpProvider } from '../../../providers/wp/wp';

/**
 * Generated class for the TipInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tip-info',
  templateUrl: 'tip-info.html',
})
export class TipInfoPage {

  loading = 1;
  loadingTime = 1;

  tipsData;
  defultImage = "assets/imgs/images/fitness.jpeg";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private wpProvider: WpProvider,
    private toastCtrl: ToastController) {
    this.getTips();
    if(this.tipsData == null || this.tipsData == undefined ){
      this.loading=1;
      this.loadingTime=1;
    }
    else{
      this.loading=0;
      this.loadingTime=0;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipInfoPage');
  }

  getTips(refresher?){
    this.loading = 0;
    this.wpProvider.getTips()
    .subscribe(data =>{
      this.tipsData = data;
      setTimeout(() => {
        if(this.tipsData == null || this.tipsData == undefined ){
          let errorToast = this.toastCtrl.create({
            message: 'Slow network, check connection....',
            duration: 5000
          });
          errorToast.present();
        }
      }, 3000);
    });

    let toast = this.toastCtrl.create({
      message: 'Loading latest tips ....',
      duration: 3000
    });

    toast.present();

    if(refresher){
      this.wpProvider.getTips().subscribe(data => {
        this.loading=1;
        this.tipsData = data;
        refresher.complete()
      });
    }
    else{
      this.loading=1;
    }
  }

  doRefresh(refresher) {

    this.getTips(refresher)
  }

  fullPost(data){
    this.navCtrl.push('FullPostPage', {data: data})
  }

}
