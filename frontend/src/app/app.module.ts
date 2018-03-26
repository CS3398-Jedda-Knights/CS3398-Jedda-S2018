import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



// routes 
import { AppRoutingModule } from '../app/routes/app-routing.module'

// components
import { AppComponent } from './app.component';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { MainAboutComponent } from './components/main-about/main-about.component';


import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { TakeNotesComponent } from './components/take-notes/take-notes.component';

// services
import { UserService } from './user.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NotebookComponent,
    FlashcardsComponent,
    TopnavComponent,
    MainLoginComponent,
    TakeNotesComponent,
    MainHomeComponent,
    MainNavigationComponent,
    MainFooterComponent,
    MainAboutComponent,
    UserProfileComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
