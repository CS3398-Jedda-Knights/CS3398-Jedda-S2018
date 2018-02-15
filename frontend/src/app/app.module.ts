import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule} from '../app/routes/app-routing.module'
import { MainLoginComponent } from './components/main-login/main-login.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HttpRequest } from 'selenium-webdriver/http';
import { MainHomeComponent } from './components/main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLoginComponent,
    MainNavigationComponent,
    MainFooterComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
