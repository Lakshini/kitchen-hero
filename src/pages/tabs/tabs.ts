import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AdditemsPage} from '../additems/additems';
import {ViewitemsPage} from '../viewitems/viewitems'
import {MainPage} from '../main/main';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tab1Root = MainPage;
  tab2Root = AdditemsPage;
  tab3Root = ViewitemsPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
