import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth, public route: ActivatedRoute, public router: Router) {
    this.user$ = afAuth.authState;
  }


  logout() {
    this.afAuth.auth.signOut();

  }
  login() {
    let returnUrl = '/';
    this.route.queryParams.subscribe(params => {
      returnUrl = params['returnUrl'];
      localStorage.setItem('returnUrl',returnUrl)
      
    });

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
