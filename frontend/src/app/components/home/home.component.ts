import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  }

  userName() {
    this.str = this.user.userName;
  }

  viewNotes(button0:number) {
    this.noteViews = this.sectionsContent[button0];
  }

}
