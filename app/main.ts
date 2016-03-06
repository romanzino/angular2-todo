import {bootstrap} from 'angular2/platform/browser';
import {TodoComponent} from './components/todo.component'
import {TodoService} from './services/todo.service';

bootstrap(TodoComponent, [TodoService]);
