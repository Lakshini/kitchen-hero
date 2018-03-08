import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {MainPage} from '../main/main';
import {TabsPage} from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  launchTabsPage(){
    this.navCtrl.push(TabsPage);
  }

}
