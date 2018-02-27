import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  sections:string[];
  sectionsContent:string[][];
  noteViews:string[];
  notes:string[];
  str:string = "Hello World!";

  constructor(private user: UserService) {}

  ngOnInit() {
    //this.sections = ['Electronics','Digital Signal Processing','History'];
    //this.noteViews = ['Hello','World','Good','Bye'];
    //this.sectionsContent = [['It','Works','Yayy!'],['It','Works','Yayy!'],['It','Works','Yayy!']]

    this.sections = this.user.notes;
    this.noteViews = ['Hello','World','Good','Bye'];
    this.sectionsContent = this.user.sections;
  }
  
  addItem() {
    this.sections.push('New Notes');
    this.user.userName = "Admin";
  }

  viewNotes(button0:number) {
    this.noteViews = this.sectionsContent[button0];
    this.closeNav();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
}
