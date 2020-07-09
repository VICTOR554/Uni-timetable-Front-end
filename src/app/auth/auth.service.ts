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

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this._token
    })
  };

  token(studentId: number, password: string) {
    return this.http.post('https://timetable-plus.herokuapp.com/login', {
      number: studentId,
      password
    });
  }

  httpHeaderAuthorization(token) {
    console.log(token);
    this._token = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this._token);
  }

  logout() {
    console.log('before log out', this._userIsAuthenticated);
    this._userIsAuthenticated = false;
  }

  login() {
    console.log('before log in', this._userIsAuthenticated);
    this._userIsAuthenticated = true;
  }
}
