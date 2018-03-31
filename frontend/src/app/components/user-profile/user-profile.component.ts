import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private username: string;
  private user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(this.username).subscribe(data =>{
      this.user = data['user'];
      console.log(this.user);

    }, error=> {
      console.log(error);
    })
  }
}
