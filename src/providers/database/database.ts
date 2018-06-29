import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
  constructor(public alertCtrl: AlertController,public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    //create database
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }
  fillDatabase() {
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }
  //insert data to the database
  additems(name, exDate, noOfItems,fridgeOrRack) {
    let data = [name, exDate, noOfItems,fridgeOrRack]
    return this.database.executeSql("INSERT INTO itemskitchen (name, exDate, noOfItems,fridgeOrRack) VALUES (?, ?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  //get detail from the database
  getAllDetails() {
    return this.database.executeSql("SELECT * FROM itemskitchen", []).then((data) => {
      let itemlist = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          itemlist.push({ name: data.rows.item(i).name, exDate: data.rows.item(i).exDate, noOfItems: data.rows.item(i).noOfItems ,fridgeOrRack:data.rows.item(i).fridgeOrRack});
        }
      }
      return itemlist;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  //remove items from the database
  deleteItem(exDate,name){
    this.database.executeSql("DELETE FROM itemskitchen WHERE exDate=? AND name=?",[exDate,name]);
  }
  //get database state
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}
