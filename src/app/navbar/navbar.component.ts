import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {
isLoggedIn: boolean = false;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
   
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.isAuthenticated(token)
      .then((user) => {
        console.log(user.json());
        if (user.json().email != null) {
          this.isLoggedIn = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}