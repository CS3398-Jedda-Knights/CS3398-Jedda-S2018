import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  private user;
  private username;
  sections:string[];
  sectionsContent:string[][];
  noteViews:string[];
  notes:string[];
  str:string = "Hello World!";

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.username = localStorage.getItem('current_user');

    this.userService.getUser(this.username).subscribe(data => {
      this.user = data['user'];
      // fake flashcard. GRAB REAL DATA WHEN API IS READY
      this.notes = this.user.notes;
      console.log(this.user);
    });
  }
  //   //this.sections = ['Electronics','Digital Signal Processing','History'];
  //   //this.noteViews = ['Hello','World','Good','Bye'];
  //   //this.sectionsContent = [['It','Works','Yayy!'],['It','Works','Yayy!'],['It','Works','Yayy!']]

  //   this.sections = this.user.notes;
  //   this.noteViews = ['Hello','World','Good','Bye'];
  //   this.sectionsContent = this.user.sections;
  // }
  
  // addItem() {
  //   this.sections.push('New Notes');
  //   this.user.userName = "Admin";
  // }

  // viewNotes(button0:number) {
  //   this.noteViews = this.sectionsContent[button0];
  //   this.closeNav();
  // }

  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }

  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }

  
  
}
