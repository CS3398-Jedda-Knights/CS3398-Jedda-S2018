import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
const APP_SERVER = 'http://localhost:9000/';

@Injectable()
export class UserService {
  private url = APP_SERVER;
  private authToken;
  private options;

  constructor(private http: Http) { }

  getUser(username) {
    this.url = APP_SERVER + 'user/' + username;
    this.authToken = localStorage.getItem('token');
    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':`JWT ${this.authToken}`}) });

    return this.http.get(this.url, username)
      .map((res: Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');
  }


}
