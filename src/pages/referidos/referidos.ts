import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-referidos',
  templateUrl: 'referidos.html',
})
export class ReferidosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferidosPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
