import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// third party 
import { JwtModule } from '@auth0/angular-jwt';


// routes 
import { AppRoutingModule } from '../app/routes/app-routing.module'

//guards 
import { AuthGuard } from '../app/guards/auth.guard';

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
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { NoteService} from './services/note.service';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { AddFlashcardComponent } from './add-flashcard/add-flashcard.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    SignUpPageComponent,
    QuizzesComponent,
    AddNoteComponent,
    AddFlashcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:9000', 'localhost:4200'],
        blacklistedRoutes: ['localhost:9000/auth/'],
        authScheme: 'JWT'
      }
    })
  ],
  providers: [AuthGuard, UserService, LoginService, RegisterService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
