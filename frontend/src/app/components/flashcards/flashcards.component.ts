import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  
  private user;
  private username;
  flashcards: JSON[];
  decks: string[] = [];
  currentDeck: JSON[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = localStorage.getItem('current_user');

    this.userService.getUser(this.username).subscribe(data => {
      this.user = data['user'];
      // fake flashcard. GRAB REAL DATA WHEN API IS READY
      //this.user.flashcards = [{'question': 'Flyweight', 'answer': 'Flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.'}]
      this.flashcards = this.user.flashcards;
      localStorage.setItem('Current_Deck',this.flashcards[0]['subject']);
      for(let flashcard of this.flashcards){
        if(flashcard['subject'] == localStorage.getItem('Current_Deck')){
          this.currentDeck.push(flashcard);
        }
        if (!this.decks.includes(flashcard['subject'])){
          this.decks.push(flashcard['subject']);
        }
      }
      console.log(this.user);
    });
    console.log(this.flashcards);
  }

  viewDeck(subject:string){
    this.currentDeck = []
    localStorage.setItem('Current_Subject',subject);
    for(let flashcard of this.flashcards){
      if(flashcard['subject'] == subject){
        this.currentDeck.push(flashcard);
      }
    }
  }

  //viewDeck(deck:string[])
}
