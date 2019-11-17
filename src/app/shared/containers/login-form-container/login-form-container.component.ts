import { Component, OnInit } from '@angular/core';
import { LoginFormModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleLogin(credentials: LoginFormModel) {
    console.log('@login client', credentials);
  }
}
