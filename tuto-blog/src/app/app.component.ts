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
  		contenu: 'voici mon premier post'
  	},
	{
  		titre: 'Second post',
  		contenu: 'voici mon second post'
  	},
  	{
  		titre: 'Troisième post',
  		contenu: 'voici mon troisième post'
  	},
	{
  		titre: 'Quatrième post',
  		contenu: 'voici mon quatrième post'
  	}
  ];

}
