import { Component, state } from '@angular/core';
import { IonicPage, NavController,Platform } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Notification } from 'rxjs/Notification';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-additems',
  templateUrl: 'additems.html',
})
export class AdditemsPage {
  itemkitchen = {};
  itemkitchenlist = [];
  myActualDate='';
  Datediff=0;
  constructor(private alertCtrl: AlertController,private localNotifications: LocalNotifications,public navCtrl: NavController,private databaseprovider: DatabaseProvider, private platform: Platform) {
    this.myActualDate = new Date(new Date().getTime() ).toISOString().toString().substring(0, 10);
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        //load details of each food item when load the page
        this.loadData();
      }
    })
    //push local notifications
    this.platform.ready().then((rdy)=>{
      this.localNotifications.on('click',(Notification,state)=>{
        let json=JSON.parse(Notification.data);
      });
    });
  }
  //retrive data from the database
  loadData() {
    this.databaseprovider.getAllDetails().then(data => {
      this.itemkitchenlist = data;
    })
  }
  //Insert data to the database
  additems(name,exDate,amount) {
    if(this.itemkitchen['noOfItems']>0){
      this.databaseprovider.additems(this.itemkitchen['name'], this.itemkitchen['exDate'], parseInt(this.itemkitchen['noOfItems']),this.itemkitchen['fridgeOrRack'])
      .then(data => {
        this.loadData();
      });
      let alert = this.alertCtrl.create({
        title:  'Kitchen Hero!!',
        subTitle: 'Inserted Successfully ',
        buttons: ['OK']
      });
      alert.present();
      this.itemkitchen = {};
      //Take date difference
      this.Datediff=Number((Number(exDate.split('-')[0])-Number(this.myActualDate.split('-')[0]))*365+(Number(exDate.split('-')[1])-Number(this.myActualDate.split('-')[1]))*30+(Number(exDate.split('-')[2])-Number(this.myActualDate.split('-')[2])));
      this.localNotifications.schedule({
        id:1,
        text: name+' about to expire',
        //set the date when about to expire
        at: new Date(new Date().getTime()+this.Datediff*24*60*60*1000),
        data:{mydata:'hidden message'}
        });
      //set the No. of food items as zero, after inserting
      amount=0;
    }else{
      let alert = this.alertCtrl.create({
        title:   'Oops!!',
        subTitle: 'Invalid Details',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}


