import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private jwtHelper: JwtHelperService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.jwtHelper.isTokenExpired()) {
      this.router.navigate(['/login']);
      return false;
    }
    // return !this.jwtHelper.isTokenExpired(); 
    return true;
  }
}
