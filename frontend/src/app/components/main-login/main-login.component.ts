import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) { }


  ngOnInit() {
  }

  onLogin() {
    this.loginFail = false;

    let body = {
      "username": this.username,
      "password": this.password
    }

    this.loginService.login(body).subscribe( data =>{
        this.router.navigate(['/home']);

    }, error => {
      // if (error.status_code == 401) {
        this.serverResponse = 'Incorrect username or password';
      // }
      // else {
      //   this.serverResponse = 'Failure to connect to the server';
      // }
      this.password = '';
      this.username = '';
  
      this.loginFail = true;
    });
  }

  onRegister() {
    this.router.navigate(['/sign-up-page']);
  }


}
