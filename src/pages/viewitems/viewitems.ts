import { Component } from '@angular/core';
import { IonicPage, NavController,Platform } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'page-viewitems',
  templateUrl: 'viewitems.html',
})
export class ViewitemsPage {
  itemkitchen = {};
  itemkitchenlist = [];
  myActualDate='';
  Datediff='';
  constructor(private iab: InAppBrowser,public alertCtrl: AlertController,public navCtrl: NavController,private databaseprovider: DatabaseProvider, private platform: Platform) {
    this.myActualDate = new Date(new Date().getTime() ).toISOString().toString().substring(0, 10);
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        //view details
        this.loadDetails();
      }
    })  
  }
  //remove items from the database
  deleteItems(exDate,name){
    this.databaseprovider.deleteItem(exDate,name);
  }
  //retrive data with the database
  loadDetails() {
    this.databaseprovider.getAllDetails().then(data => {
      this.itemkitchenlist = data;
    })
  }
  //connect with wiki
  ngOnInit(name){
    const browser = this.iab.create('https://www.wikipedia.org/','_self',{location:'no'}); 
  }
  //take date difference
  dateDif(exDate){
    this.Datediff=String((Number(exDate.split('-')[0])-Number(this.myActualDate.split('-')[0]))*365+(Number(exDate.split('-')[1])-Number(this.myActualDate.split('-')[1]))*30+(Number(exDate.split('-')[2])-Number(this.myActualDate.split('-')[2])));
    return this.Datediff;
  }
}
