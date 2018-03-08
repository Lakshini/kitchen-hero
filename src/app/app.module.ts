import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MainPage} from '../pages/main/main';
import { TabsPage } from '../pages/tabs/tabs';
import { AdditemsPage } from '../pages/additems/additems';
import { ViewitemsPage } from '../pages/viewitems/viewitems';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TabsPage,
    AdditemsPage,
    ViewitemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    TabsPage,
    AdditemsPage,
    ViewitemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
