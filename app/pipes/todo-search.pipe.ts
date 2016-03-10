import {Pipe} from 'angular2/core';
import {TodoModel} from '../models/todo.model';

@Pipe({
	name: 'todosearch',
	pure: false
})

export class TodoSearchPipe {
	transform(value: Array<TodoModel>, [searchTerm]) {

		if (typeof searchTerm === 'string' && searchTerm.length > 0) {
			value = value.filter((item) => {
				if (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
					return true;
				}
			});
		}

		return value;
	}
}