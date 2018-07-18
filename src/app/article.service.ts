import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
	providedIn: 'root'
})
export class ArticleService {
	private subject: BehaviorSubject<Array<Article>>;

	constructor() {
		this.subject = new BehaviorSubject(new Array());
	}

	get articles(): Observable<Array<Article>> {
		return this.subject.asObservable();
	}

	loadMock() {
		let mock: Array<Article> = [
			{
				id: 0,
				title: 'Article n°1',
				content: 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
			},{
				id: 1,
				title: 'Article n°2',
				content: 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
			},{
				id: 2,
				title: 'Article n°3',
				content: 'Nunc consectetur convallis magna, vitae ornare enim laoreet a. Nulla facilisi. Pellentesque in arcu dapibus sapien vulputate tempor vel id magna. Curabitur in pulvinar augue. Fusce vitae volutpat mi. Curabitur lacinia placerat nulla ac suscipit. Etiam a facilisis magna. Morbi aliquam sem et vehicula fermentum. Morbi sit amet lobortis justo. Sed viverra dui id enim eleifend, ut aliquam velit finibus. Fusce vitae lorem tortor. Pellentesque vitae quam in velit ultrices convallis. Donec non est imperdiet, vulputate felis ut, luctus ipsum. Pellentesque lacinia non leo vitae efficitur.'
			}
		];
		this.subject.next(mock);
	}
	
}