import {Component} from 'angular2/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'todo-add',
  templateUrl: './app/components/todo-add/todo-add.component.html'
})

export class TodoAddComponent {
  formData: {} = {};

  constructor(public TodoService: TodoService) {}

  onSubmit() {
  	this.TodoService.createTodo(this.formData);
  	this.reset();
  }

  reset() {
  	this.formData = {};
  }
}
