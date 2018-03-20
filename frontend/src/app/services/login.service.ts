import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'; 


const APP_SERVER = 'http://localhost:9000/';



@Injectable()
export class LoginService {
  private url = APP_SERVER;
  private options: RequestOptions = new RequestOptions({
    headers: new Headers({ 'Content-Type': 'application/json' })
  });

  constructor(private http: Http) { }

  login(body) {
    this.url = APP_SERVER + 'auth';

      return this.http.post(this.url, body, this.options)
      .map((res:Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');

  }

}
