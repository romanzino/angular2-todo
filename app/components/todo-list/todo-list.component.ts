import {Component, 
	Input, Output, 
	EventEmitter, 
	OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {TodoService} from '../../services/todo.service';
import {TodoModel} from '../../models/todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './app/components/todo-list/todo-list.component.html',
  styleUrls: ['./app/components/todo-list/todo-list.component.css']
})

export class TodoListComponent implements OnInit, OnChanges {
	todos: Array<TodoModel> = [];
	todosCount: number;
	todoThatIsEdited: TodoModel;
	@Input() filterByTodosStatus: string|{};
	@Input() searchTerm: string = '';
	@Input() onMarkAllTodosAs: symbol;
	@Output() todosCountUpdate: EventEmitter<any> = new EventEmitter();
	@Output() todosCountOfNotCompletedUpdate: EventEmitter<any> = new EventEmitter();

	constructor(private TodoService: TodoService) {
		
	}

	ngOnInit() {
		this.filterTodosByStatus();
		this.afterFilteringTodos();
	}

	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if (changes['searchTerm']) {
			if (typeof this.searchTerm === 'string') {
				this.filterTodosBySearchTerm();
				this.afterFilteringTodos();
			}
		}

		if (changes['onMarkAllTodosAs']) {
			this.filterTodosByStatus();
			this.afterFilteringTodos();
		}
	}

	removeTodo(todo: TodoModel) {
		this.TodoService.removeTodo(todo);
		this.afterFilteringTodos();
	}

	editTodo(todo: TodoModel) {
		this.todoThatIsEdited = todo;
	}

	toggleStateOfTodo(todo: TodoModel) {
		this.TodoService.toggleStateOfTodo(todo);

		this.filterTodosByStatus();
		this.afterFilteringTodos();
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

	private filterTodosByStatus(): Array<TodoModel> {
		if (typeof this.filterByTodosStatus === 'string') {
			this.todos = this.TodoService.todos.filter((item) => {
				if (item.status === this.filterByTodosStatus) {
					return true;
				}
			});
		}
		else {
			this.todos = this.TodoService.todos;
		}

		return this.todos;
	}

	private filterTodosBySearchTerm(): Array<TodoModel> {
		return this.todos = this.TodoService.todos.filter((item) => {
			if (item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
				return true;
			}
		});
	}

	private afterFilteringTodos() {
		this.getCountOfNotCompletedTodos();

		this.todosCount = this.todos.length;
		this.todosCountUpdate.emit(this.todosCount);

		return this.todosCount;
	}

	private getCountOfNotCompletedTodos():number {
		let todosCountOfNotCompleted: number = 0;

		for (let todo of this.todos) {
			if (todo.status !== this.TodoService.todosStatus[1]) {
				todosCountOfNotCompleted++;
			}
		}

		this.todosCountOfNotCompletedUpdate.emit(todosCountOfNotCompleted);
		return todosCountOfNotCompleted;
	}
}
