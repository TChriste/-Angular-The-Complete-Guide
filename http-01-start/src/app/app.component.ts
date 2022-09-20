import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostModel} from './post.model';
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: PostModel[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.fetchPosts();
  }

  onCreatePost(postData: PostModel) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
   this.isFetching = true;
   this.postsService.fetchPosts().subscribe(posts => {
     this.loadedPosts = posts;
     this.isFetching = false;
   }, error => {
      this.error = error.message;
      this.isFetching = false;
   });
  }

  onHandleError() {
    this.error = null;
  }


  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}
