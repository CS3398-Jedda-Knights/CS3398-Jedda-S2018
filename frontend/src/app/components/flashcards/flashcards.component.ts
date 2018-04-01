import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  decks:string[];
  flashcards:string[][][];
  flashcardViews:string[][];
  question:string;
  answer:string;
  result:string;
  current:number;
  input:string = "";

  constructor(private user: UserService) { }

  ngOnInit() {}
  // ngOnInit() {
  //   this.decks = this.user.decks;
  //   this.flashcards = this.user.flashcards;
  //   this.current = 0;
  //   this.flashcardViews = [['Question1','Answer1'],['Question2','Answer2'],['Question3','Answer3']];
  //   this.answer = this.flashcardViews[this.current][1];
  //   this.question = this.flashcardViews[this.current][0];
  // }

  // viewFlashcard(deck:number) {
  //   this.flashcardViews = this.flashcards[deck];
  //   this.closeNav();
  // }

  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }

  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }

  // setAnswer(input) {
  //   if(this.answer == input.value){
  //     this.result = this.answer + "\n" + input.value + "  \u2714";
  //     document.getElementById("result").style.color = "green";
  //   }else{
  //     this.result = this.answer + "\n" + input.value + "  \u2716";
  //     document.getElementById("result").style.color = "red";
  //   }
  //   setTimeout(()=>{
  //     if(this.current < 2){
  //       this.current++;
  //     }else{
  //       this.current = 0;
  //     }
  //     this.answer = this.flashcardViews[this.current][1];
  //     this.question = this.flashcardViews[this.current][0];
  //     this.result = "";
  //   },2000);
  // }

}
