import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  sections: string[];
  sectionsContent: string[][];
  noteViews: string[];
  notes: string[];
  str: string = "Hello World!";

  constructor(private user: UserService) { }

  ngOnInit() {
    //this.sections = ['Electronics','Digital Signal Processing','History'];
    //this.noteViews = ['Hello','World','Good','Bye'];
    //this.sectionsContent = [['It','Works','Yayy!'],['It','Works','Yayy!'],['It','Works','Yayy!']]

    // this.sections = this.user.notes;
    // this.noteViews = ['Hello', 'World', 'Good', 'Bye'];
    // this.sectionsContent = this.user.sections;
  }

  // addItem() {
  //   this.sections.push('New Notes');
  // }

  // userName() {
  //   this.str = this.user.userName;
  // }

  // viewNotes(button0: number) {
  //   this.noteViews = this.sectionsContent[button0];
  // }
}
