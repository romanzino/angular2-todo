import {Component} from 'angular2/core';
import {TodoFormComponent} from './todo-form.component'

@Component({
  selector: 'todo-app',
  directives: [TodoFormComponent],
  templateUrl: './app/components/templates/todo.component.html'
})

export class TodoComponent {

}
