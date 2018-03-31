import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {

  constructor(private auth: LoginService,
              private router: Router) { }

  ngOnInit() {}

  onLogout() {
    // clear access token and redirect to the login page
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
