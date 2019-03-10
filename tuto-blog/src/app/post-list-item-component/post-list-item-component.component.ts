import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

	@Input() postTitre: string;
	@Input() postContenu: string;
	@Input() postLoveIts: number;

  constructor() { }

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

}
