import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../post';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();


  private postsUrl = 'api/postsBlog/postsBlog.json';

  constructor(private http: HttpClient) {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts(): Observable<Post[]> {
    console.log('getPosts début : '+this.posts);
    return this.http.get<Post[]>(this.postsUrl).pipe(
      tap(data => {
        console.log('All : ' + JSON.stringify(data)),
        console.log('posts get 1 : '+this.posts);
        if(this.posts.length <= data.length) {
          this.posts = data;
        }
        console.log('posts get 2 : '+this.posts);
        this.emitPosts();
      }),
      catchError(this.handleError)
    );

    
  }

  createPost(post: Post) {
    console.log('posts existants new : '+this.posts);
    console.log('post créé : ' + this.posts);
    this.posts.push(post);
    this.emitPosts();
  }



  private handleError(err: HttpErrorResponse) {
    console.log('handleError');
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
