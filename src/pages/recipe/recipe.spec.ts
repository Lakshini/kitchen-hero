import {} from 'jasmine';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RecipePage } from './recipe';
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
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TapClick } from 'ionic-angular/tap-click/tap-click';
let comp: RecipePage;
let fixture: ComponentFixture<RecipePage>;
let de: DebugElement;
let el: HTMLElement;
//start testing for recipe page
describe('Page: Recipe Page', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyApp, RecipePage],
            providers: [
                StatusBar,
                SplashScreen,
                {provide: ErrorHandler, useClass: IonicErrorHandler},
                HttpModule,
                NavController,
                DatabaseProvider,
                SQLitePorter,
                SQLite,
                LocalNotifications,
                Http,
                ConnectionBackend,
                InAppBrowser
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot(),
                HttpModule
            ]
        }).compileComponents()
    }));
    //declare before each
    beforeEach(() => {
        fixture = TestBed.createComponent(RecipePage);
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
        expect(RecipePage).toBeDefined();
    });
    it('should apply', function() {
        expect(RecipePage.apply).toBeDefined();
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