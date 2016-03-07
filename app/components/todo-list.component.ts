import {Component} from 'angular2/core';
import {TodoService} from '../services/todo.service';


@Component({
  selector: 'todo-list',
  templateUrl: './app/components/templates/todo-list.component.html'
})

export class TodoListComponent {
	todoIdThatIsEdited: number;

	constructor(public TodoService: TodoService) {

	}

	removeTodo(index: number) {
		this.TodoService.removeTodo(index);
	}

	editTodo(index: number) {
		this.todoIdThatIsEdited = index;
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
