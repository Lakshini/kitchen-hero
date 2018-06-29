import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//import { HomePage } from '../home/home';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  tabBarElement: any;
  splash = true;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }
  ionViewDidLoad() {
    //set timer for animation
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 8000);
  }
  
}
