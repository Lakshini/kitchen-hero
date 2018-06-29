import { Component } from '@angular/core';
import {TabsPage} from '../tabs/tabs';
import { DatabaseProvider } from './../../providers/database/database';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userlogin = {};
  userloginlist = [];
  constructor(public alertCtrl: AlertController,public navCtrl: NavController,private databaseprovider: DatabaseProvider,private platform: Platform) {
}
}
