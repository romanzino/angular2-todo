import {Component} from 'angular2/core';
import {TodoAddComponent} from './todo-add.component';
import {TodoListComponent} from './todo-list.component';

@Component({
  selector: 'todo-app',
  directives: [TodoAddComponent, TodoListComponent],
  templateUrl: './app/components/templates/todo.component.html'
})

export class TodoComponent {

}
