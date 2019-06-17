import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[] = [];
  errorMessage: string;

  postSubscription: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    console.log('PostListComponentComponent ngOnInit()');

    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

    this.postService.getPosts();
    this.postService.emitPosts();
  }

  ngOnChange(): void {
    console.log('PostListComponentComponent ngOnChange()');
  }

  ngOnDestroy() {
  	this.postSubscription.unsubscribe();
  }

}
