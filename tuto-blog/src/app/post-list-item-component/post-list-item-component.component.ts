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
  	console.log('I love it !');
  	this.postLoveIts = this.postLoveIts + 1;
  }

  onDontLoveIt() {
  	console.log('I don\'t love it !');
  	this.postLoveIts = this.postLoveIts - 1;
  }

  onDelete() {
    this.postService.deletePost(this.post);
  }

}
