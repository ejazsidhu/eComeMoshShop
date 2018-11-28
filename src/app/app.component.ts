import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eComSite';
  constructor(public authService: AuthService,public router:Router) {

    this.authService.user$.subscribe(user => {
      if (user) {
        let url = localStorage.getItem('returnUrl');
        console.log('urel is ',url)
        router.navigateByUrl(url)
      }
    })

  }


}
