import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {

    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    else{
      this.router.navigateByUrl("/login");
      return false;
    }
  
  }
}
