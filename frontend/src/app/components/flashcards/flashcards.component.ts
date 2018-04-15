import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FlashcardService } from '../../services/flashcard.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  private user;
  private username;
  private question: string;
  private answer: string;
  private subject: string;
  constructor(private userService: UserService, private flashCardService: FlashcardService, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('current_user');

    this.userService.getUser(this.username).subscribe(data => {
      this.user = data['user'];
      // fake flashcard. GRAB REAL DATA WHEN API IS READY
      this.user.flashcards = [{'question': 'Flyweight', 'answer': 'Flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.'}]
      console.log(this.user);
    });
  }

  onCreateFlashCard() {
    let body = {
      "username": this.username,
      "subject": this.subject,
      "question": this.question,
      "answer": this.answer,
    };
    // console.log(body)

    this.flashCardService.createFlashCard(body).subscribe(data => {
      this.subject = "";
      this.question = "";
      this.answer = "";
    }, error=> {
      console.log(error);
      this.router.navigate(['/user-profile',this.username]);
    });

}
