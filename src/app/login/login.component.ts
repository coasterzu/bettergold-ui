import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { User } from '../model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  ngOnInit(): void {  };
  
  user: User = new User();
  constructor(private auth: AuthService, private router: Router) {}
  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      console.log("token--: "+user.json().token)
      localStorage.setItem('token', "Bearer "+user.json().token);
      localStorage.setItem('userChannel', user.json().userChannel);
      this.router.navigateByUrl("/exchange");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  }
}