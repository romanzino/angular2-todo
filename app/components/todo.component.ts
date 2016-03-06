import {Component} from 'angular2/core';
import {TodoFormComponent} from './todo-form.component';
import {TodoListComponent} from './todo-list.component';

@Component({
  selector: 'todo-app',
  directives: [TodoFormComponent, TodoListComponent],
  templateUrl: './app/components/templates/todo.component.html'
})

export class TodoComponent {

}
