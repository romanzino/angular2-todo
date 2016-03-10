import {TodoModel} from '../models/todo.model';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
	todos: Array<TodoModel> = [];
	todosStatus: string[] = ['started', 'completed'];
	localStorageIndex: string = 'angular2-todo';

	constructor() {
		let todosFromLocalStorage = JSON.parse(localStorage.getItem(this.localStorageIndex) || '[]');
		
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

	toggleStateOfTodo(todoId: number) {
		let currentTodo = this.todos[todoId];

		if (currentTodo.status === this.todosStatus[0]) {
			currentTodo.status = this.todosStatus[1];
		}
		else {
			currentTodo.status = this.todosStatus[0];
		}

		this.saveTodos();
	}

	markAllTodosAsCompleted() {
		for (let todo of this.todos) {
			if (todo.status === this.todosStatus[0]) {
				todo.status = this.todosStatus[1];
			}
		}

		this.saveTodos();
	}

	saveTodos() {
		let data = JSON.stringify(this.todos);
		localStorage.setItem(this.localStorageIndex, data);
	}
}
