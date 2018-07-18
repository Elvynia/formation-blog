import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'blog-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	idCount: number = 0;
	article: Article;
	@Output() onCreate: EventEmitter<Article>;

	constructor() {
		this.article = new Article();
		this.article.id = ++this.idCount;
		this.onCreate = new EventEmitter();
	}

	ngOnInit() {
	}

	submit(form: NgForm) {
		this.onCreate.emit(JSON.parse(JSON.stringify(this.article)));
		form.resetForm();
		this.article.id = ++this.idCount;
	}

}
