import {TodoModel} from '../models/todo.model';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
	todos: Array<TodoModel> = [];
	todosStatus: string[] = ['active', 'completed'];
	localStorageIndex: string = 'angular2-todo';

	constructor() {
		const todosFromLocalStorage = JSON.parse(localStorage.getItem(this.localStorageIndex) || '[]');
		
		for (let todo of todosFromLocalStorage) {
			this.todos.push(todo);
		}
	}

	createTodo(todoOptions: {}) {
		const todoDefaultOptions: {
			status: string
		} = {
			status: this.todosStatus[0]
		};

		const todo = Object.assign(todoDefaultOptions, todoOptions);

		this.todos.push(new TodoModel(todo));
		this.saveTodos();
	}

	removeTodo(todo: TodoModel) {
		this.todos.splice(this.findIndexOfTodo(todo), 1);
		this.saveTodos();
	}

	updateTodo({todo, todoTitle}) {
		this.findTodo(todo).title = todoTitle;
		this.saveTodos();
	}

	toggleStateOfTodo(todo: TodoModel) {
		if (todo.status === this.todosStatus[0]) {
			todo.status = this.todosStatus[1];
		}
		else {
			todo.status = this.todosStatus[0];
		}

		this.saveTodos();
	}

	markAllTodosAs(status: string) {

		for (let todo of this.todos) {
			todo.status = status;
		}

		this.saveTodos();
	}

	saveTodos() {
		const data = JSON.stringify(this.todos);
		localStorage.setItem(this.localStorageIndex, data);
	}

	private findTodo(todo: TodoModel): TodoModel {
		return this.todos[this.todos.indexOf(todo)];
	}

	private findIndexOfTodo(todo: TodoModel): number {
		return this.todos.indexOf(todo);
	}
}