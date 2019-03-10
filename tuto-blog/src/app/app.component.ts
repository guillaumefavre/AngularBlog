import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
  	{
  		titre: 'Premier post',
  		contenu: 'voici mon premier post',
  		loveIts: 3
  	},
	{
  		titre: 'Second post',
  		contenu: 'voici mon second post',
  		loveIts: -2
  	},
  	{
  		titre: 'Troisième post',
  		contenu: 'voici mon troisième post',
  		loveIts: 4
  	},
	{
  		titre: 'Quatrième post',
  		contenu: 'voici mon quatrième post',
  		loveIts: 1
  	}
  ];

}
