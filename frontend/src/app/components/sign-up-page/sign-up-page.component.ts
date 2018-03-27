import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  private first_name: string = '';
  private last_name: string = '';
  private username: string = '';
  private password: string = '';
  private email: string = '';
  private acceptTerms: Boolean = false;
  private serverResponse: string = '';
  private registerFail: boolean;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onSignup() {
    this.registerFail = false;

    let body = {
      "first_name": this.first_name,
      "last_name": this.last_name,
      "username": this.username,
      "password": this.password,
      "email": this.email,
    }

    console.log(body)

    this.registerService.signUp(body).subscribe(data => {
      console.log(data);
    }, error=> {
      console.log(error);
    })

    // this.registerService.register(body).subscribe( data =>{
    //     this.router.navigate(['/home']);

    // }, error => {
    //   // if (error.status_code == 401) {
    //     this.serverResponse = 'Could not validate email.';
    //   // }
    //   // else {
    //   //   this.serverResponse = 'Failure to connect to the server';
    //   // }

    //   this.registerFail = true;
    // })
  }
}
