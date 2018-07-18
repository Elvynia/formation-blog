import { Component } from '@angular/core';
import { Article } from './article';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string;
	articles: Array<Article>;
	showList: boolean;

	constructor() {
		this.showList = true;
		this.title = 'Bienvenue sur mon blog réalisé avec Angular 6.0.3 !';
		this.articles = new Array();
	}

	handleCreate(article: Article) {
		this.articles.push(article);
		this.showList = true;
	}

	deleteArticle(id: number) {
		this.updateList(id);
	}

	editArticle(id: number) {

	}

	private updateList(id: number, article?: Article) {
		let index = this.articles.findIndex((truc) => truc.id === id);
		if (index >= 0) {
			if (article) {
				this.articles.splice(index, 1, article);
			} else {
				this.articles.splice(index, 1);
			}
		}
	}
}
