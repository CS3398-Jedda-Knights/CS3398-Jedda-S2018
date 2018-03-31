import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  error: string;
  

  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {
  }

  // setUser(userName: string, password: string) {
  //   if(userName == "admin"){
  //     if(password == "password"){
  //       this.user.userName = "Administration";
  //       this.user.notes = ['English','Math','History'];
  //       this.user.sections = [['Admin','Admin','Admin',"Admin"],['Admin','Admin','Admin',"Admin"],['Admin','Admin','Admin',"Admin"]];
  //       this.user.decks = ['English','Math','History'];
  //       this.user.flashcards = [[['Question','Answer'],['Question','Answer'],['Question','Answer']],[['Question','Answer'],['Question','Answer'],['Question','Answer']],[['Question','Answer'],['Question','Answer'],['Question','Answer']]];
  //       this.router.navigate(['/','Home']);
  //     }
  //     else{
  //       this.error = "Incorrect Password";
  //     }
  //   }
  //   else if(userName == "john"){
  //     if(password == "jedda"){
  //       this.user.userName = "John";
  //       this.user.notes = ['French','Science','History'];
  //       this.user.sections = [['John','John','John','John'],['John','John','John','John'],['John','John','John','John']];
  //       this.user.decks = ['English','Math','History'];
  //       this.user.flashcards = [[['Question','Answer'],['Question','Answer'],['Question','Answer']],[['Question','Answer'],['Question','Answer'],['Question','Answer']],[['Question','Answer'],['Question','Answer'],['Question','Answer']]];
  //       this.router.navigate(['/','Home']);
  //     }
  //     else{
  //       this.error = "Incorrect Password";
  //     }
  //   }
  //   else{
  //     this.error = "Username Unkown";
  // //   }
  // }
}
