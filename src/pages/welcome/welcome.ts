import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

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

  onGoToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
