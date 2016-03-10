import {Component} from 'angular2/core';
import {TodoService} from '../../services/todo.service';

@Component({
	selector: 'todo-actions',
	templateUrl: './app/components/todo-actions/todo-actions.component.html'
})

export class TodoActionsComponent {
	constructor (public TodoService: TodoService) {

	}

	markAllAsCompleted() {
		this.TodoService.markAllAsCompleted();
	}
}