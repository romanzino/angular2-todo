import {Component} from 'angular2/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './app/components/templates/todo-form.component.html'
})

export class TodoFormComponent {
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
