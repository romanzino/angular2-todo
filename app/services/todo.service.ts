import {TodoModel} from '../models/todo.model';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
	todos: Array<TodoModel> = [];

	createTodo(todo: {}) {
		this.todos.push(new TodoModel(todo));
	}

	removeTodo(index: number) {
		this.todos.splice(index, 1);
	}
}
