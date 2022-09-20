import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {PostModel} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: PostModel = { title, content };
    this.http.post<{name: string}>('https://ng-complete-guide-89788.firebaseio.com/posts.json',
      postData, {
        observe: 'response'
      })
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts(): Observable<any> {
    return this.http
      .get<{ [key: string]: PostModel}>('https://ng-complete-guide-89788.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'hello'}),
          params: new HttpParams().set('print', 'pretty')
      })
      .pipe(map(responseData => {
        const postsArray: PostModel[] = [];
        for(const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }), catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      }));
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-89788.firebaseio.com/posts.json', {
      observe: 'events',
      responseType: 'text'
    }).pipe(tap(event => {
      if (event.type === HttpEventType.Sent) {
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
