import {Component, Input} from 'angular2/core';
import {TodoService} from '../../services/todo.service';
import {TodoSearchPipe} from '../../pipes/todo-search.pipe';
import {TodoModel} from '../../models/todo.model';

@Component({
  selector: 'todo-list',
  pipes: [TodoSearchPipe],
  templateUrl: './app/components/todo-list/todo-list.component.html',
  styleUrls: ['./app/components/todo-list/todo-list.component.css']
})

export class TodoListComponent {
	todoThatIsEdited: TodoModel;
	@Input() searchTerm: string;

	constructor(public TodoService: TodoService) {

	}

	removeTodo(todo: TodoModel) {
		this.TodoService.removeTodo(todo);
	}

	editTodo(todo: TodoModel) {
		this.todoThatIsEdited = todo;
	}

	toggleStateOfTodo(todo: TodoModel) {
		this.TodoService.toggleStateOfTodo(todo);
	}

	tryToStopEditingTodo(todoTitle: string, event: Event) {
		if (event.type === 'keypress') {
			//13 is a code of enter button
			if (event.keyCode === 13) {
				this.stopEditingTodo(todoTitle);
			}
		}
		else if (event.type === 'blur') {
			if (this.todoThatIsEdited) {
				this.stopEditingTodo(todoTitle);	
			}
		}
	}

	stopEditingTodo(todoTitle: string) {
		this.TodoService.updateTodo({
			todo: this.todoThatIsEdited,
			todoTitle: todoTitle
		});

		this.todoThatIsEdited = undefined;
	}
}
