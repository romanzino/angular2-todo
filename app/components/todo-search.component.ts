import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoService} from '../services/todo.service';


@Component({
  selector: 'todo-search',
  templateUrl: './app/components/templates/todo-search.component.html'
})

export class TodoSearchComponent {
	@Output() searchTermUpdate: EventEmitter<any> = new EventEmitter();
}
