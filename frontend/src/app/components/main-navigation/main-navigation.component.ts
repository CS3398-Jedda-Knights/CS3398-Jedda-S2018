import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  private username;

  constructor(private auth: LoginService,
              private userservice: UserService,
              private router: Router,
              private jwtHelperService: JwtHelperService) { }

  ngOnInit() {
    this.username = localStorage.getItem('current_user');
  }

  onLogout() {
    // clear access token and redirect to the login page
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    this.router.navigate(['/login']);
  }
}
