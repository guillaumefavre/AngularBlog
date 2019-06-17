import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const titre = form.value['titre'];
    const contenu = form.value['contenu'];

    const newPost = new Post(titre, contenu, 0);

    this.postService.createPost(newPost);
    this.router.navigate(['/posts']);
    console.log(newPost);
}

}
