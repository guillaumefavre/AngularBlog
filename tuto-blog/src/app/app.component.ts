import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date = new Date();

  posts = [
  	{
  		titre: 'Premier post',
  		contenu: 'voici mon premier post',
  		loveIts: 3,
  		creationDate: this.getDate()
  	},
	{
  		titre: 'Second post',
  		contenu: 'voici mon second post',
  		loveIts: -2,
  		creationDate: this.getDate()
  	},
  	{
  		titre: 'Troisième post',
  		contenu: 'voici mon troisième post',
  		loveIts: 4,
  		creationDate: this.getDate()
  	},
	{
  		titre: 'Quatrième post',
  		contenu: 'voici mon quatrième post',
  		loveIts: 1,
  		creationDate: this.getDate()
  	}
  ];

  constructor() {

  }

  getDate() {
  	return this.date;
  }

}
