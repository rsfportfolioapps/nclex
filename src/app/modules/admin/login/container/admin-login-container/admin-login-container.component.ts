import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../auth/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginFormModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-admin-login-container',
  templateUrl: './admin-login-container.component.html',
  styleUrls: ['./admin-login-container.component.scss']
})
export class AdminLoginContainerComponent implements OnInit {
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService$: AuthenticationService
  ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/admin/dashboard';

    if (this.authService$.loggedInUser) {
      this.navigateToPage();
    }
  }

  navigateToPage() {
    this.router.navigate([this.returnUrl]);
  }

  handleLogin(credentials: LoginFormModel) {
    this.authService$.login(credentials);
    this.navigateToPage();
  }
}
