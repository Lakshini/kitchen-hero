import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AdditemsPage} from '../additems/additems';
import {ViewitemsPage} from '../viewitems/viewitems';
import {RecipePage} from '../recipe/recipe';
import {MainPage} from '../main/main';
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  constructor(public navCtrl: NavController) {
  }
  //root pages
  tab1Root = MainPage;
  tab2Root = AdditemsPage;
  tab3Root = ViewitemsPage;
  tab4Root= RecipePage;
}
