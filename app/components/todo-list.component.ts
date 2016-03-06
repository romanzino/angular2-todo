import {Component} from 'angular2/core';
import {TodoService} from '../services/todo.service';


@Component({
  selector: 'todo-list',
  templateUrl: './app/components/templates/todo-list.component.html'
})

export class TodoListComponent {
	constructor(public TodoService:TodoService) {

	}

	removeTodo() {
		
	}
}
