import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../../model/user';
import { environment } from '../../../environments/environment';
@Injectable()
export class AuthService {
  
  //private BASE_URL: string = 'https://www.bettergold.io'; 
  private BASE_URL: string = environment.apiUrl;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/auth`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  // register(user: User): Promise<any> {
  //   let url: string = `${this.BASE_URL}/register`;
  //   return this.http.post(url, user, {headers: this.headers}).toPromise();
  // }

  isAuthenticated(token): Promise<any> {
    let url: string = `${this.BASE_URL}/authstatus`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }

  
}
