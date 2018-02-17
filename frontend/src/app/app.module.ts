import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { NotebookComponent } from './components/notebook/notebook.component';

import { UserService } from './user.service';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MainLoginComponent } from './components/main-login/main-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    NotebookComponent,
    FlashcardsComponent,
    TopnavComponent,
    MainLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainMenuComponent},
      { path: 'Notebook', component: NotebookComponent},
      { path: 'Home', component: HomeComponent},
      { path: 'Flashcards', component: FlashcardsComponent}
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
