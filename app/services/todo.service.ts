import {TodoModel} from '../models/todo.model';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
	todos: Array<TodoModel> = [];
	static localStorageIndex: string = 'angular2-todo';

	constructor() {
		let todosFromLocalStorage = JSON.parse(localStorage.getItem(TodoService.localStorageIndex) || '[]');
		
		for (let todo of todosFromLocalStorage) {
			this.todos.push(todo);
		}
	}

	createTodo(todo: {}) {
		this.todos.push(new TodoModel(todo));
		this.saveTodos();
	}

	removeTodo(index: number) {
		this.todos.splice(index, 1);
		this.saveTodos();
	}

	updateTodo({todoId, todoTitle}) {
		this.todos[todoId].title = todoTitle;
		this.saveTodos();
	}

	saveTodos() {
		let data = JSON.stringify(this.todos);
		localStorage.setItem(TodoService.localStorageIndex, data);
	}
}
