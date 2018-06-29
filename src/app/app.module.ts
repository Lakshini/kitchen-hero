import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MainPage} from '../pages/main/main';
import {RecipePage} from '../pages/recipe/recipe';
import { TabsPage } from '../pages/tabs/tabs';
import { AdditemsPage } from '../pages/additems/additems';
import { ViewitemsPage } from '../pages/viewitems/viewitems';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalNotifications } from '@ionic-native/local-notifications';
@NgModule({
   //page declarations
  declarations: [ 
    MyApp,
    HomePage,
    MainPage,
    TabsPage,
    RecipePage,
    AdditemsPage,
    ViewitemsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //entry components
  entryComponents: [   
    MyApp,
    HomePage,
    MainPage,
    TabsPage,
    RecipePage,
    AdditemsPage,
    ViewitemsPage
  ],
  //Native plugins
  providers: [     
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    InAppBrowser,
    LocalNotifications,
  ]
})
export class AppModule {}
