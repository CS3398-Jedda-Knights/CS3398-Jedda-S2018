import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
const APP_SERVER = 'http://localhost:9000/';

@Injectable()
export class UserService {
  private url = null;
  private authToken = null;
  private options = null;

  constructor(private http: Http) { }

  getUser(username) {
    this.url = APP_SERVER + 'user/' + username;
    this.authToken = localStorage.getItem('access_token');
    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':`JWT ${this.authToken}`}) });

    return this.http.get(this.url, username)
      .map((res: Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');
  }

  getUserById(id) {
    this.url = APP_SERVER + 'user/' + id;
    // TODO turn this into a function
    this.authToken = localStorage.getItem('access_token');
    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `JWT ${this.authToken}` }) });

    return this.http.get(this.url, id)
      .map((res: Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');
  }


}
