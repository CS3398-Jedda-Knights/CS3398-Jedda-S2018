import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  private username: string = localStorage.getItem('current_user');
  private subject: string = '';
  private title: string = '';
  private note: string = '';
  //private noteService: NoteService;

constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {}

  onCreateNote() {
    let body = {
      "title": this.title,
      "username": this.username,
      "subject": this.subject,
      "body": this.note,
    };
    // console.log(body)

    this.noteService.createNote(body).subscribe(data => {
      this.subject = "";
      this.title = "";
      this.note = "";
    }, error=> {
      console.log(error);
      this.router.navigate(['/user-profile',this.username]);
    });
  }
}
