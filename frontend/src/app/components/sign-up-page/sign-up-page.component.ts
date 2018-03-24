import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  private fullName: string = '';
  private email: string = '';
  private password: string = '';
  private dateOfBirth: string = '';
  private serverResponse: string = '';
  private registerFail: boolean;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.registerFail = false;

    let body = {
      "username": this.fullName,
      "email": this.email,
      "password": this.password,
      "dateOfBirth": this.dateOfBirth
    }

    this.registerService.register(body).subscribe( data =>{
        this.router.navigate(['/home']);

    }, error => {
      // if (error.status_code == 401) {
        this.serverResponse = 'Could not validate email.';
      // }
      // else {
      //   this.serverResponse = 'Failure to connect to the server';
      // }
      this.password = '';
      this.fullName = '';
      this.email = '';
      this.dateOfBirth = '';
  
      this.registerFail = true;
    })
  }
}
