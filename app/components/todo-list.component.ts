import {Component} from 'angular2/core';
import {TodoService} from '../services/todo.service';
import {TodoSearchComponent} from './todo-search.component';
import {TodoSearchPipe} from '../pipes/todo-search.pipe';

@Component({
  selector: 'todo-list',
  directives: [TodoSearchComponent],
  pipes: [TodoSearchPipe],
  templateUrl: './app/components/templates/todo-list.component.html'
})

export class TodoListComponent {
	todoIdThatIsEdited: number;
	searchTerm: string = '';

	constructor(public TodoService: TodoService) {

	}

	removeTodo(todoId: number) {
		this.TodoService.removeTodo(todoId);
	}

	editTodo(todoId: number) {
		this.todoIdThatIsEdited = todoId;
	}

	toggleStateOfTodo(todoId: number) {
		this.TodoService.toggleStateOfTodo(todoId);
	}

	tryToStopEditingTodo(todoTitle: string, event: Event) {
		if (event.type === 'keypress') {
			//13 is a code of enter button
			if (event.keyCode === 13) {
				this.stopEditingTodo(todoTitle);
			}
		}
		else if (event.type === 'blur') {
			if (this.todoIdThatIsEdited > -1) {
				this.stopEditingTodo(todoTitle);	
			}
		}
	}

	stopEditingTodo(todoTitle: string) {
		this.TodoService.updateTodo({
			todoId: this.todoIdThatIsEdited,
			todoTitle: todoTitle
		});

		this.todoIdThatIsEdited = -1;
	}
}
