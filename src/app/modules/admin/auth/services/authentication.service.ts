import { Injectable } from '@angular/core';
import { LoginFormModel } from 'src/app/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  public get loggedInUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  login(credentials: LoginFormModel) {
    localStorage.setItem('currentUser', JSON.stringify(credentials));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
