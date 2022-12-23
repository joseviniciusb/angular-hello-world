import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterButtomComponent } from './counter-buttom/counter-buttom.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
