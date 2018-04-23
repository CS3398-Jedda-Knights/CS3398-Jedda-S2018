import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';

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
  currentNotes: string[] = [];
  subjects: string[] = [];
  note: string;
  title: string;
  currentHTML: string;
  editNoteTitleHTMLbeggining: string = "<div class=\"margin-bottom:20px\">Notes<textarea rows=\"1\" id=\"note-title\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\" required>";
  editNoteBodyHTMLbeggining: string = "<div class=\"margin-bottom:20px\">Notes<textarea rows=\"10\" id=\"note-body\" class=\"form-control\" name=\"note\" [(ngModel)]=\"note\" required>";
  editNoteTitleHTMLend: string = "</textarea></div>";
  editNoteBodyHTMLend: string = "</textarea></div>";

  constructor(private route: ActivatedRoute, private userService: UserService, private noteService: NoteService) {}

  ngOnInit() {
    this.username = localStorage.getItem('current_user');

    this.userService.getUser(this.username).subscribe(data => {
      this.user = data['user'];
      // fake flashcard. GRAB REAL DATA WHEN API IS READY
      this.notes = this.user.notes;
      localStorage.setItem('Current_Subject',this.notes[0]['subject']);
      for(let note of this.notes){
        if(note['subject'] == localStorage.getItem('Current_Subject')){
          this.currentNotes.push(note);
        }
        if (!this.subjects.includes(note['subject'])){
          this.subjects.push(note['subject']);
        }
      }
      //console.log(this.user);
    });
  }
  
  viewNoteBook(subject:string){
    this.currentNotes = []
    localStorage.setItem('Current_Subject',subject);
    for(let note of this.notes){
      if(note['subject'] == subject){
        this.currentNotes.push(note);
      }
    }
  }

  noteEditor(note:JSON){
    //console.log(document.getElementById("title" + note['title']).textContent);
    document.getElementById("title" + note['title']).style.border = "1px solid black";
    document.getElementById("body" + note['title']).style.border = "1px solid black";
    document.getElementById("title" + note['title']).contentEditable = "true";
    document.getElementById("body" + note['title']).contentEditable = "true";
    document.getElementById("button" + note['title']).style.visibility = "visible";
    document.getElementById("edit" + note['title']).style.visibility = "hidden";
    document.getElementById("trash" + note['title']).style.visibility = "hidden";
  }

  editNote(note:JSON){
    //console.log(note);
    //document.getElementById(this.currentNotes[this.currentNote]['title']).innerHTML = this.currentNotes[this.currentNote]['body'];
    for(var i = 0; i < this.currentNotes.length; i++){
      if(this.currentNotes[i]['id'] == note['id']){
        this.currentNotes[i]['title'] = document.getElementById("title" + note['title']).textContent;
        this.currentNotes[i]['body'] = document.getElementById("body" + note['title']).textContent;
      }
    }
    //console.log(document.getElementById("title" + note['title']).textContent);
    //console.log(document.getElementById("body" + note['title']).textContent);

    let body = {
      "username": localStorage.getItem('current_user'),
      "title": document.getElementById("title" + note['title']).textContent,
      "subject": note['subject'],
      "body": document.getElementById("body" + note['title']).textContent,
      "active": 'T',
    };
    // console.log(body)

    this.noteService.updateNote(body,note['id']).subscribe(data => {
      document.getElementById("title" + note['title']).style.border = "none";
      document.getElementById("body" + note['title']).style.border = "none";
      document.getElementById("title" + note['title']).contentEditable = "false";
      document.getElementById("body" + note['title']).contentEditable = "false";
      document.getElementById("button" + note['title']).style.visibility = "hidden";
      document.getElementById("edit" + note['title']).style.visibility = "visible";
      document.getElementById("trash" + note['title']).style.visibility = "visible";

    }, error=> {
      console.log(error);
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
