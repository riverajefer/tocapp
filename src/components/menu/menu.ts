import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent implements OnInit  {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  text: string;
  pages: Array<{title: string, component: any}>;

  constructor() {

  }

  ngOnInit() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
