import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {TodoComponent} from './components/todo/todo.component'
import {TodoService} from './services/todo.service';

@Component({
	selector: 'app-main',
	templateUrl: './app/main.html'
})

class Main {

}

bootstrap(Main, [TodoService, ROUTER_PROVIDERS]);
