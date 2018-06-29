import { MethodCall } from "@angular/compiler";
export class ConfigMock {
    public get(): any {
      return '';
    }
    public getBoolean(): boolean {
      return true;
    }
    public getNumber(): number {
      return 1;
    }
  }
  export class FormMock {
    public register(): any {
      return true;
    }
  }
  export class NavMock {
    public pop(): any {
      return new Promise(function(resolve: Function): void {
        resolve();
      });
    }
    public push(): any {
      return new Promise(function(resolve: Function): void {
        resolve();
      });
    }
    public getActive(): any {
      return {
        'instance': {
          'model': 'something',
        },
      };
    }
    public setRoot(): any {
      return true;
    }
  }
  export class PlatformMock {
    public ready(): any {
      return new Promise((resolve: Function) => {
        resolve();
      });
    }
  }
  export class MenuMock {
    public close(): any {
      return new Promise((resolve: Function) => {
        resolve();
      });
    } 
  }
  export class DatabaseMock{
    //mock variables
    exDate='2018-06-20';
    name="Apple";
   // noOfItems=2;
    //fridgeOrRack="Fridge";
    
    //mock methods
    public deleteItem(exDate,name):any {return {}}; 
  }