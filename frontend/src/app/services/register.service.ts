import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


const APP_SERVER = 'http://localhost:9000/';

@Injectable()
export class RegisterService {

  private url = APP_SERVER;
  private authToken;
  private options;

  constructor(private http: Http) { }

  signUp(body) {
    this.url = APP_SERVER + 'user/signup';

    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json'})});

    return this.http.post(this.url, body, this.options)
    .map((res:Response) => res.json())
    .catch((error: any) => error.json() || 'Server error');
  }
}
