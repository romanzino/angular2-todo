import {Component} from 'angular2/core';
import {TodoAddComponent} from './todo-add/todo-add.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoSearchComponent} from './todo-search/todo-search.component';
import {TodoActionsComponent} from './todo-actions/todo-actions.component';

import {TodoService} from  '../services/todo.service';

@Component({
  selector: 'todo-app',
  directives: [TodoAddComponent, TodoListComponent, TodoSearchComponent, TodoActionsComponent],
  templateUrl: './app/components/todo.component.html'
})

export class TodoComponent {
	constructor(public TodoService: TodoService) {

	}
}
