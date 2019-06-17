import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[] = [];
  errorMessage: string;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    console.log('PostListComponentComponent OnInit()');

    this.postService.getPosts().subscribe(
      postsReturn => this.posts = postsReturn,
      error => this.errorMessage = <any>error
    );
  }



}
