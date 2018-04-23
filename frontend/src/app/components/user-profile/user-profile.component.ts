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
  private new_name: string = '';
  private new_status: string = '';
  private new_bio: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(this.username).subscribe(data =>{
      this.user = data['user'];
      this.new_name = this.user.first_name + ' ' + this.user.last_name;
      this.new_status = this.user.status;
      this.new_bio = this.user.short_description;
      this.notes = this.user.notes.slice(0,4);
      this.flashcards = this.user.flashcards.slice(0, 3);
    }, error=> {
      console.log(error);
    });
  }

  updateName() {
    // TODO: add validations and catch exception
    // split string into first and last name 
    try {
      let arr = this.new_name.split(" ");
      let fn = arr[0]
      let ln = arr[1]
      let body = {
        "first_name": fn,
        "last_name": ln
      }
      this.userService.updateUserFullName(this.user.username, body).subscribe(data => {
      })
    } catch (exception) {
      console.log(exception);
    }
  }

  updateStatus() {
    console.log('new_status', this.new_status);

    let body = {
      "status": this.new_status
    }
    this.userService.updateUserStatus(this.username, body).subscribe(data => {
    });
  }

  updateBio() {

    let body = {
      "short_description": this.new_bio
    }
    console.log('new_status', body);


    this.userService.updateUserBio(this.username, body).subscribe(data => {

    })
  }

 }
