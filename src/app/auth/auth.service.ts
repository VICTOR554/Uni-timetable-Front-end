import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export interface AuthResponseData {
  token?: string;
  text?: string;
}

@Injectable({
  providedIn: 'root'
})




export class AuthService {
  // tslint:disable-next-line: variable-name
  private _userIsAuthenticated = false;

  // token watch
  // tslint:disable-next-line: variable-name
  private _token = '';

  // to make sure _userIsAuthenticated can not be overidden any where in the app
  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userToken() {
    return this._token;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this._token
    })
  };

  token(token) {
    console.log(token);
    this._token = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this._token);
  }

  constructor(private http: HttpClient) { }

  login(studentId: number, password: string) {
    return this.http.post('https://timetable-plus.herokuapp.com/login', {
      number: studentId,
      password
    });
  }

  logout() {
    console.log('before logged out', this._userIsAuthenticated);
    this._userIsAuthenticated = false;
  }

  loggedin() {
    console.log('before logged in', this._userIsAuthenticated);
    this._userIsAuthenticated = true;
  }
}
