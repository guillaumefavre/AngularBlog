import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() postTitre: string;
	@Input() postContenu: string;
	@Input() postLoveIts: number;
  @Input() postCreationDate: string;
  @Input() post: Post;
  


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.lovePost(this.post);
  }

  onDontLoveIt() {
    this.postService.dontLovePost(this.post);
  }

  onDelete() {
    this.postService.deletePost(this.post);
  }

}
