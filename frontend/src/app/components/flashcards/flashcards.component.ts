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
  flashcards: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = localStorage.getItem('current_user');

    this.userService.getUser(this.username).subscribe(data => {
      this.user = data['user'];
      this.flashcards = this.user.flashcards;
      // console.log(this.user);
    });
  }
}
