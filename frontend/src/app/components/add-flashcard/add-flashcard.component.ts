import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.css']
})
export class AddFlashcardComponent implements OnInit {

  private username: string = localStorage.getItem('current_user');
  private question: string;
  private answer: string;
  private subject: string;

  constructor(private flashCardService: FlashcardService, private router: Router) { }

  ngOnInit() {

  }

  onCreateFlashCard() {
    let body = {
      "username": this.username,
      "subject": this.subject,
      "question": this.question,
      "answer": this.answer,
    };
    console.log(body);

    this.flashCardService.createFlashCard(body).subscribe(data => {
      this.subject = "";
      this.question = "";
      this.answer = "";
      //this.router.navigate(['/user-profile', this.username]);

    }, error=> {
      console.log(error);
      this.router.navigate(['/user-profile',this.username]);
    });
  } 
}
