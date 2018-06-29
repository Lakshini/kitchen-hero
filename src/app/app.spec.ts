import {} from 'jasmine';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {TabsPage} from "../pages/tabs/tabs";


let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp],

            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
            ],

            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(MyApp);
        comp = fixture.componentInstance;
    });
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });
    it('initializes with a root page of Tabs Page', () => {
        expect(comp['rootPage']).toBe(TabsPage);
    });
});