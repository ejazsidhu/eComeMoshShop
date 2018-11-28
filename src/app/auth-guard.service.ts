import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
// import 'rxjs-compat/add/operator/map';
// import 'rxjs/Rx';
import 'rxjs-compat/add/operator/map'
import { map } from 'rxjs-compat/operator/map';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  flag=false;
  constructor(private authService:AuthService,private router:Router,private userService:UserService) {
    
   }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(this.userService.isUserLoggedIn())
    {
      return this.flag;
    }

    else{
      this.router.navigate(['/login'],{
        queryParams:{returnUrl:state.url }

      });
      return this.flag
    }
    
  }
}
// 