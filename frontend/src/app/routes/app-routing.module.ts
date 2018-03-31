import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import for guards 
import { AuthGuard } from '../guards/auth.guard';

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
import { QuizzesComponent } from '../components/quizzes/quizzes.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: MainLoginComponent},
  { path: 'about', component: MainAboutComponent },
  { path: 'home', component: MainHomeComponent, canActivate: [AuthGuard] },
  { path: 'user-profile/:username', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'sign-up-page', component: SignUpPageComponent },
  { path: 'notebook', component: NotebookComponent, canActivate: [AuthGuard] },
  { path: 'flashcards', component: FlashcardsComponent, canActivate: [AuthGuard] },
  { path: 'take-notes', component: TakeNotesComponent, canActivate: [AuthGuard] },
  { path: 'quizzes', component: QuizzesComponent, canActivate: [AuthGuard] },


  //this is the redirect for garbage routes. (This should be the last route)
  { path: '**', component: MainHomeComponent, canActivate: [AuthGuard] },
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
