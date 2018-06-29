import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
  constructor(private iab: InAppBrowser,public navCtrl: NavController) {
    this.ngOnInit();
  }
  //connect with the browser
ngOnInit(){
  const browser = this.iab.create('https://www.allrecipes.com','_self',{location:'no'}); 
}
}
