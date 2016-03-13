import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'todo-add',
  templateUrl: './app/components/todo-add/todo-add.component.html'
})

export class TodoAddComponent {
  formData: {} = {};
  @Output() onAddTodo: EventEmitter<any> = new EventEmitter();

  constructor(public TodoService: TodoService) {}

  onSubmit() {
  	this.TodoService.createTodo(this.formData);
    this.onAddTodo.emit(Symbol());
    
  	this.reset();
  }

  reset() {
  	this.formData = {};
  }
}
