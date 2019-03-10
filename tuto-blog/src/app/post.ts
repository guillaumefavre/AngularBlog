export class Post {
	titre: string;
	contenu: string;
	loveIts: number;
	creationDate: Date;

	constructor(titre, contenu, loveIts) {
	  	this.titre = titre;
	  	this.contenu = contenu;
	  	this.loveIts = loveIts;
	  	this.creationDate = new Date();
  }
}
