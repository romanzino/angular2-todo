import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoService} from '../../services/todo.service';

@Component({
	selector: 'todo-actions',
	templateUrl: './app/components/todo-actions/todo-actions.component.html',
	styleUrls: ['./app/components/todo-actions/todo-actions.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class TodoActionsComponent{
	
	constructor(public TodoService: TodoService) {
		
	}

	markAllTodosAsCompleted() {
		this.TodoService.markAllTodosAsCompleted();
	}
}