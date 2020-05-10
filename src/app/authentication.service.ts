// Service to authenticate user information

import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, config } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl: string = 'api/users';

  constructor(private http: HttpClient, private router: Router) { }

  signup(formData: NgForm) {
    return this.http.post<any>(`${this.apiUrl}/signup`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('getHeroes', []))
    );
  }

  // Login feature that reads the login form and sends HTTP request to verify user information. User name authentication is processed successfully while password check is broken.
  login(formData: NgForm) {
    return this.http.post<any>(`${this.apiUrl}/login`, formData).pipe(
      tap(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.handleError('login', []))
    );
  }

  // Signs the user out of their account.
  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/home']);
    }
  }

  // To verify that there is currently a user who is logged in. This determines whether user dashboard is accessible.
  isloggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  // If a current user is logged in, return user information.
  getUser() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  // Below is the error handling found on Angular website.
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
