import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'authenticated');
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'authenticated');
  }

  onGoTolist() {
    this.navCtrl.push(ListPage);

  }

}
