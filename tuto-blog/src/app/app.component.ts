import { Component } from '@angular/core';
import { Post } from './post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // posts = [
  // 	new Post('Premier post', 'Voici mon tout premier post', 2),
  // 	new Post('Deuxième post', 'Voici mon todeuxième post', 1),
  // 	new Post('Troisième post', 'Et un troisième post', -2), 
  // 	new Post('Quatrième post', 'Puis un quatrième post', 3)
  // ];



  constructor(private postService: PostService) {}

  ngOnInit(): void {

  }

}

