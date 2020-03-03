import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

// tslint:disable-next-line: variable-name
private _userIsAuthenticated = true;

// to make sure _userIsAuthenticated can not be overidden any where in the app
get userIsAuthenticated() {
  return this._userIsAuthenticated;
}

  constructor() { }

  login() {
    this._userIsAuthenticated = true;
  }



  logout() {
    this._userIsAuthenticated = false;
  }
}
