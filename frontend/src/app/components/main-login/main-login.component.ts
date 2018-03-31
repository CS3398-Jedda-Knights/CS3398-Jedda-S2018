import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {
  private username: string = '';
  private password: string = '';
  private serverResponse = '';
  private loginFail: boolean = false;

  constructor(private loginService: LoginService, 
              private router: Router, 
              public jwtHelper: JwtHelperService) { }


  ngOnInit() {
  }

  onLogin() {
    this.loginFail = false;

    let body = {
      "username": this.username,
      "password": this.password
    }
    this.loginService.login(body).subscribe( data =>{
      // save the token and current user in local storage
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('current_user', this.username);
      this.router.navigate(['/user-profile', this.username]);
    }, error => {
        this.serverResponse = 'Incorrect username or password';
        console.log(error.statusText);  
        // this.loginFail = true;
    });
  }

  onLogout() {
    // clear access token and redirect to the login page
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    this.router.navigate(['/login']);
  }
}
