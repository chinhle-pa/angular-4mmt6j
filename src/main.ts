import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

let cordova;

if (environment.production) {
  enableProdMode();
}


let onDeviceReady = () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
};

document.addEventListener('deviceready', onDeviceReady, false);

/*
declare var cordova;
export function main(): Promise<NgModuleRef<AppModule>>{
  if(typeof cordova !== 'undefined'){
    document.addEventListener('deviceready', main, false);
  } 
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if(document.readyState === 'complete'){
  platformBrowserDynamic().bootstrapModule(AppModule);
} else {
  if(typeof cordova !== 'undefined'){
    document.addEventListener('deviceready', main, false);
  } else {
   document.addEventListener('DOMContentLoaded', main); 
  }
}*/



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/