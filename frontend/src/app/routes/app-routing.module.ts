import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import for main-components
import { MainLoginComponent } from '../components/main-login/main-login.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { MainHomeComponent } from '../components/main-home/main-home.component';
import { MainAboutComponent } from '../components/main-about/main-about.component';

// imports for sub-components
import { FlashcardsComponent } from '../components/flashcards/flashcards.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { TakeNotesComponent } from '../components/take-notes/take-notes.component';
import { NotebookComponent } from '../components/notebook/notebook.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { SignUpPageComponent } from '../components/sign-up-page/sign-up-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: MainLoginComponent},
  { path: 'about', component: MainAboutComponent },
  { path: 'home', component: MainHomeComponent },
  { path: 'notebook', component: NotebookComponent },
  { path: 'flashcards', component: FlashcardsComponent },
  { path: 'take-notes', component: TakeNotesComponent },
  { path: 'user-profile/:username', component: UserProfileComponent },
  { path: 'sign-up-page', component: SignUpPageComponent },


  //this is the redirect for garbage routes. (This should be the last route)
  { path: '**', component: MainHomeComponent },
]

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
