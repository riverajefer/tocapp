import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReferidosPage } from '../referidos/referidos';


@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  onGoToReferidos() {
    // this.navCtrl.setRoot(ReferidosPage);
    const modal = this.modalCtrl.create(ReferidosPage);
    modal.present();
  }

}
