import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  decks:string[];
  flashcards:string[][][];
  flashcardViews:string[][];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.decks = this.user.decks;
    this.flashcards = this.user.flashcards;
    this.flashcardViews = [['Hello','World'],['Hello','World'],['Hello','World']];
  }

  viewFlashcard(deck:number) {
    this.flashcardViews = this.flashcards[deck];
    this.closeNav();
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
