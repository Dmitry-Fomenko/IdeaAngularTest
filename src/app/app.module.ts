import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';  // для роутинга
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService} from './hero.service';
import { HeroesObservableComponent } from './heroes-observable/heroes-observable.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HttpClientModule } from '@angular/common/http'; // для http



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesObservableComponent,
    MessagesComponent,
    DashboardComponent,
    HeroDetailComponent,

  ],
  imports: [
    HttpClientModule, // для http
    BrowserModule,
    AppRoutingModule, // для роутинга
    FormsModule
  ],
  providers: [HeroService],

  bootstrap: [AppComponent]
})
export class AppModule { }
