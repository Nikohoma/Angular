import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cust1Component } from './cust1/cust1.component';
import { Cust2Component } from './cust2/cust2.component';
import { AsyncpipeexComponent } from './asyncpipeex/asyncpipeex.component';
import { NavComponent } from './nav/nav.component';
import { CubePipe } from './cube.pipe';
import { DataPipe } from './data.pipe';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    Cust1Component,
    Cust2Component,
    AsyncpipeexComponent,
    NavComponent,
    CubePipe,
    DataPipe,
    ServiceExampleComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
