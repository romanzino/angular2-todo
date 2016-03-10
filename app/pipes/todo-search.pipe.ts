import {Pipe} from 'angular2/core';
import {TodoModel} from '../models/todo.model';

@Pipe({
	name: 'todosearch',
	pure: false
})

export class TodoSearchPipe {
	transform(value: Array<TodoModel>, [searchTerm, todoStatus]) {
		if (!searchTerm) {
			searchTerm = '';
		}

		value = value.filter((item) => {
			if ((item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
				&& (item.status === todoStatus || !todoStatus)) {
				return true;
			}
		});

		return value;
	}
}