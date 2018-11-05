import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WelcomePage } from '../../pages/welcome/welcome';
import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent implements OnInit  {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  text: string;
  pages: Array<{title: string, component: any}>;

  constructor() {

  }

  ngOnInit() {
    this.pages = [
      { title: 'Home', component: WelcomePage },
      { title: 'List', component: ListPage }
    ];
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
