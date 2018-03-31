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
        // save the token in local storage
      localStorage.setItem('access_token', data.access_token);
        this.router.navigate(['/user-profile', this.username]);
    }, error => {
        this.serverResponse = 'Incorrect username or password';
        console.log(error.statusText);  
      this.loginFail = true;
    });

    //   console.log(this.jwtHelper.decodeToken(localStorage.getItem('access_token')));
    // console.log(this.jwtHelper.getTokenExpirationDate()); // date
    // console.log(this.jwtHelper.isTokenExpired()); // date

  }

  onLogOut() {
    // clear token token and revoke access
    // localStorage.removeItem('access_token');
    localStorage.setItem('access_token', 'X');
  }


}
