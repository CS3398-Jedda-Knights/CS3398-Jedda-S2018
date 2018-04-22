import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const APP_SERVER = 'http://localhost:9000/';

@Injectable()
export class NoteService {

  private url = APP_SERVER;
  private authToken;
  private options;

  constructor(private http: Http) { }

  createNote(body) {
    this.url = APP_SERVER + 'note/add';

    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json'})});

    return this.http.post(this.url, body, this.options)
    .map((res: Response) => res.json())
    .catch((error: any) => error.json() || 'Server error');
  }

  getNoteByID(id) {
    this.url = APP_SERVER + 'note/' + id;
    
    this.authToken = localStorage.getItem('access_token');
    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `JWT ${this.authToken}` }) });
    
    return this.http.get(this.url, id)
      .map((res: Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');
  }

  getNoteBySubject(subject) {
    this.url = APP_SERVER + 'note/' + subject;
    
    this.authToken = localStorage.getItem('access_token');
    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `JWT ${this.authToken}` }) });
    
    return this.http.get(this.url, subject)
      .map((res: Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');
  }

  updateNote(body, id) {
    this.url = APP_SERVER + 'note/' + id;

    this.options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json'})});

    return this.http.put(this.url, body, this.options)
    .map((res: Response) => res.json())
    .catch((error: any) => error.json() || 'Server error');
  }
}
