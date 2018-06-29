import {} from 'jasmine';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MainPage } from './main';
import {MyApp} from '../../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,RequestOptions, XHRBackend  } from '@angular/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IonicPage, NavController,Platform } from 'ionic-angular';
import { DatabaseProvider } from './../../providers/database/database';
import { DebugElement} from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';
import { NgControl } from '@angular/forms/src/directives/ng_control';
import { NavControllerBase } from 'ionic-angular/navigation/nav-controller-base';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionBackend } from '@angular/http';
import { TapClick } from 'ionic-angular/tap-click/tap-click';
import {DatabaseMock} from "../../mocks";
let comp: MainPage;
let fixture: ComponentFixture<MainPage>;
let de: DebugElement;
let el: HTMLElement;
//start unit testing for main page
describe('Page: MainPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp, MainPage],
            providers: [
                StatusBar,
                SplashScreen,
                {provide: ErrorHandler, useClass: IonicErrorHandler},
                HttpModule,
                NavController,
                {provide:DatabaseProvider,useClass:DatabaseMock},
                SQLitePorter,
                SQLite,
                LocalNotifications,
                Http,
                ConnectionBackend
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot(),
                HttpModule
            ]
        }).compileComponents();
    }));
    //declare before each
    beforeEach(() => {
        fixture = TestBed.createComponent(MainPage);
        comp    = fixture.componentInstance;
    });
    //declare after each
    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });
    //test cases for each component
    it('is created',function() {
        expect(fixture).toBeTruthy();
    });
    it('comp is created', function() {
        expect(comp).toBeTruthy();
    });
    it('should exist', function() {
        expect(MainPage).toBeDefined();
    });
    it('should apply', function() {
        expect(MainPage.apply).toBeDefined();
    });
    it('TapClick name ', function() {
        expect(TapClick).toBeDefined();
    }); 
    it('TapClick length', function() {
        expect(TapClick.length).toBeDefined();
    }); 
    it('TapClick prototype', function() {
        expect(TapClick.prototype).toBeDefined();
    }); 
});