// Service that contains useful methods and data found in Configuration. 
// The use of this service is by creating an instance of config in other components and call its necessary properties.

import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration; // Data from configuration.ts
  apiUrl = 'api/posts'; // String name to call post from API
  
  constructor(private http: HttpClient) { }

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

  // Returns config data.
  getConfig() {
    return this.config;
  }

  // Sends http request with apiUrl and id information to return specific post.
  getPostByID(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Post by ID', []))
    );
  }

  // Returns all posts.
  getPosts(): Observable<Post[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Posts', []))
    );
  }

  getSettings( database: string, id?: string ): Observable<any[]> { // general method to return everything from a provided database name
    let uid = id || null; // unique id
    let url: string; // url to check if there is one provided.
    uid !== null ? url = `api/${database}/${id}` : url = `api/${database}`; // if there is id, get specific item by that id.
    
    return this.http.get<any>(url).pipe( // If id is null, url will contain only general database name.
      tap(
        setting => console.log(setting)
      ),
      catchError(this.handleError('Get Settings', []))
    );
  }

  // If user makes changes to the post, update this on the server. This method works but is no longer being used as edit. To implement, create edit buttons and generate a form to collect the changed data.
  updatePost(formData: NgForm): Observable<Post> {
    return this.http.put<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Posts', []))
    );
  }

  // To add additional post on the website. This method works, but is no longer being used.
  addPost(formData: NgForm): Observable<Post> {
    return this.http.post<any>(`${this.apiUrl}`, formData).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Add New Posts', []))
    );
  }

}
