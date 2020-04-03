import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  // runs before lazy loaded code
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   console.log(this.authService.userIsAuthenticated);
  //   if (this.authService.userIsAuthenticated !== true) {
  //     this.router.navigateByUrl('/auth');
  //   }
  //   return this.authService.userIsAuthenticated;
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.authService.userIsAuthenticated);
    if (this.authService.userIsAuthenticated !== true) {
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated;
  }
}
