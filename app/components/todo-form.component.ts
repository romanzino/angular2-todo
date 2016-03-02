import {Component} from 'angular2/core';

@Component({
  selector: 'todo-form',
  templateUrl: './app/components/templates/todo-form.component.html'
})

export class TodoFormComponent {
  items: string[] = ['First option', 'Second option'];
  model: {} = {};
  models: Array<{}>;

  task() {
    console.log(1);
  }
}
