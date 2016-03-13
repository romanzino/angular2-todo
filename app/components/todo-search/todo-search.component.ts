import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'todo-search',
  templateUrl: './app/components/todo-search/todo-search.component.html'
})

export class TodoSearchComponent {
	@Output() filterValueTodoTitleUpdate: EventEmitter<any> = new EventEmitter();
}
