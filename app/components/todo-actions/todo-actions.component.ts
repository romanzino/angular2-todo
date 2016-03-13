import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoService} from '../../services/todo.service';

@Component({
	selector: 'todo-actions',
	templateUrl: './app/components/todo-actions/todo-actions.component.html',
	styleUrls: ['./app/components/todo-actions/todo-actions.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class TodoActionsComponent{
	@Input() todosCount: number;
	@Input() todosCountOfNotCompleted: number;
	@Output() onMarkAllTodosAs: EventEmitter<any> = new EventEmitter();
	
	constructor(private TodoService: TodoService) {
		
	}

	private markAllTodosAs(statusIndex) {
		this.TodoService.markAllTodosAs(statusIndex);
		this.onMarkAllTodosAs.emit(Symbol());
	}

}