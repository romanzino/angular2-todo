import {Component, 
	Input, Output, 
	EventEmitter, 
	OnInit, OnChanges, SimpleChange} from 'angular2/core';
import {TodoService} from '../../services/todo.service';
import {TodoModel} from '../../models/todo.model';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'todo-list',
  templateUrl: './app/components/todo-list/todo-list.component.html',
  styleUrls: ['./app/components/todo-list/todo-list.component.css']
})

export class TodoListComponent implements OnInit, OnChanges {
	todos: Array<TodoModel> = [];
	todosCount: number;
	todoThatIsEdited: TodoModel;
	todosStatus: string;
	@Input() searchTerm: string = '';
	@Output() todosCountUpdate: EventEmitter<any> = new EventEmitter();

	constructor(private TodoService: TodoService, private router: Router, private routeParams: RouteParams) {
		this.todosStatus = routeParams.get('todoStatus');

		if (typeof this.todosStatus === 'string') {
			this.filterTodosByStatus();
		}
		else {
			this.todos = this.TodoService.todos;
		}

		this.todosCount = this.todos.length;
	}

	ngOnInit() {
		this.todosCountUpdate.emit(this.todosCount);
	}

	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
		if (changes['searchTerm']) {
			if (typeof this.searchTerm === 'string') {
				this.filterTodosBySearchTerm();
				this.afterFilteringTodos();
			}
		}
	}

	removeTodo(todo: TodoModel) {
		this.TodoService.removeTodo(todo);
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
		return this.todos = this.TodoService.todos.filter((item) => {
			if (item.status === this.todosStatus) {
				return true;
			}
		});
	}

	private filterTodosBySearchTerm(): Array<TodoModel> {
		return this.todos = this.TodoService.todos.filter((item) => {
			if (item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
				return true;
			}
		});
	}

	private afterFilteringTodos() {
		this.todosCount = this.todos.length;
		this.todosCountUpdate.emit(this.todosCount);
	}
}
