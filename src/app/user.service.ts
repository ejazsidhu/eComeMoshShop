import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLogedin=false;

  constructor(public authService:AuthService) {
    this.authService.user$.subscribe(user=>{
      if(user) this.isLogedin=true;

      else{
        return this.isLogedin=false;
      }
    })

   }

   public isUserLoggedIn(){

   return this.isLogedin
   }


}
