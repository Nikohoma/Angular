//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import { AppModule } from './app/app.module';
//import { importProvidersFrom } from '@angular/core';


//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
