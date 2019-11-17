import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService$: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService$.loggedInUser) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
