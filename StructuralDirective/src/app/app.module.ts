import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfexampleComponent } from './ifexample/ifexample.component';
import { SwitchexampleComponent } from './switchexample/switchexample.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { SecondComponent } from './second/second.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

@NgModule({
  declarations: [
    AppComponent,
    IfexampleComponent,
    SwitchexampleComponent,
    ExerciseComponent,
    SecondComponent,
    PipeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
