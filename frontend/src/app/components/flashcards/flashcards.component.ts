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
  currentFlashcard: JSON;
  answer: string;
  question: string;
  result: string;
  current: number;
  finalTime: number = 60;
  time: number = 0;
  timeleft: number;
  correct: number = 0;

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
        this.currentFlashcard = this.currentDeck[0];
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
    this.currentFlashcard = this.currentDeck[0];
  }

  setAnswer(input) {
    console.log(this.currentFlashcard['answer']);
    if(this.currentFlashcard['answer'] == input.value){
      this.result = this.currentFlashcard['answer'] + "\n" + input.value + "  \u2714";
      document.getElementById("result").style.color = "green";
      this.correct = this.correct + 1;
    }else{
      this.result = this.currentFlashcard['answer'] + "\n" + input.value + "  \u2716";
      document.getElementById("result").style.color = "red";
    }
    setTimeout(()=>{
      if(this.current < this.currentDeck.length - 1){
        this.current++;
      }else{
        this.current = 0;
      }
      this.currentFlashcard = this.currentDeck[this.current];
      //this.answer = this.flashcardViews[this.current][1];
      //this.question = this.flashcardViews[this.current][0];
      this.result = "";
    },2000);
  }

  startTimer(userTime) {
    this.finalTime = userTime;
    this.correct = 0;
    document.getElementById("correct").style.visibility = "visible";
    var x = setInterval(()=>{
      this.time = this.time + 1;
      this.timeleft = this.finalTime - this.time;
      document.getElementById("correct").innerHTML = "Correct: " + this.correct.toString();
      
      document.getElementById("time").innerHTML = this.timeleft.toString();
      document.getElementById("time").style.width = (this.time * 100/this.finalTime).toString() + "%";
      
      // If the count down is over, write some text 
      if (this.timeleft < 0) {
          clearInterval(x)
          this.time = 0;
          document.getElementById("time").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  //viewDeck(deck:string[])
}
