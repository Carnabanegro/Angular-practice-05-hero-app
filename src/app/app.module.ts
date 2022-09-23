import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Comp404Component } from './shared/comp404/comp404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Comp404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
