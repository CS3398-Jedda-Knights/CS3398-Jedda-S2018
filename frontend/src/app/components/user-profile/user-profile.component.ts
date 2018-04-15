import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private username: string;
  private user: any;
  private notes;
  private flashcards;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(this.username).subscribe(data =>{
      this.user = data['user'];
      // console.log(this.user);

      this.notes = this.user.notes;
      this.flashcards = this.user.flashcards;

      if (this.notes.length > 4) {
        this.notes = this.notes.slice(0, 4);
      }
      // console.log(this.notes);
    }, error=> {
      console.log(error);
    });
  }
}
