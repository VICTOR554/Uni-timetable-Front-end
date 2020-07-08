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

  // tslint:disable-next-line: variable-name
  private _userId = 'abc';

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



  token(studentId: number, password: string) {
    return this.http.post('https://timetable-plus.herokuapp.com/login', {
      number: studentId,
      password
    }).subscribe((res: any) => {
      console.log(res.token);
      this._token = res.token;
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', res.token);
      // console.log(this._token)
    });
  }

  get userId() {
    return this._userId;
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
