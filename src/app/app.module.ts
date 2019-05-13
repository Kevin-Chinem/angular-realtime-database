import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var env = {
  apiKey: 'AIzaSyBuX3Oa09Kb4b3O3XxbOGnrUSxs8tMiNDw',
  authDomain: 'guide-coffe-queue.firebaseapp.com',
  databaseURL: 'https://guide-coffe-queue.firebaseio.com',
  projectId: 'guide-coffe-queue',
  storageBucket: 'guide-coffe-queue.appspot.com',
  messagingSenderId: '969760865070'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(env),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }