import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  signOut() {
    // this.user.userName = ""
    // this.user.sections = null;
    // this.user.notes = null;
  }

}
