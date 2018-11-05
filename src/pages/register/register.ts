import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  showFooter = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  onScroll(e) {
    console.log('e: ', e);
    console.log('e.scrollTop: ', e.scrollTop);
    if(e.scrollTop >= 197) {
      this.showFooter = true;
    }

  }

}
