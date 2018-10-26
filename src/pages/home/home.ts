import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from './../login/login';

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

  onGoToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
