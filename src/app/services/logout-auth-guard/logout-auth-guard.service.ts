import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';
@Injectable()
export class LogoutAuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {

    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigateByUrl("/login");
    
    return false;
  
  }
}
