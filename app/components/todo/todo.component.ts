import {Component} from 'angular2/core';
import {TodoAddComponent} from '../todo-add/todo-add.component';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {TodoSearchComponent} from '../todo-search/todo-search.component';
import {TodoActionsComponent} from '../todo-actions/todo-actions.component';
import {TodoService} from  '../../services/todo.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'todo-app',
  directives: [TodoAddComponent, TodoListComponent, TodoSearchComponent, TodoActionsComponent],
  templateUrl: './app/components/todo/todo.component.html'
})

export class TodoComponent {
	filterByTodosStatus: string|{};

	constructor(private router: Router, private routeParams: RouteParams) {
		this.filterByTodosStatus = routeParams.get('todoStatus');
	}
}

