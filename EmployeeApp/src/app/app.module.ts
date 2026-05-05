import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailsComponent } from './employees/details/details.component';
import { CreateComponent } from './employees/create/create.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './employees/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
