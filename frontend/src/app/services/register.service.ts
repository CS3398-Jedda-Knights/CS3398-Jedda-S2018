import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


const APP_SERVER = 'http://localhost:9000/';

@Injectable()
export class RegisterService {

  private url = APP_SERVER;
  private options: RequestOptions = new RequestOptions({
    headers: new Headers({ 'Content-Type': 'application/json' })
  });

  constructor(private http: Http) { }

  register(body) {
    this.url = APP_SERVER + 'user/signup';

      return this.http.post(this.url, body, this.options)
      .map((res:Response) => res.json())
      .catch((error: any) => error.json() || 'Server error');

  }
}
