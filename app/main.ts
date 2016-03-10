import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {TodoComponent} from './components/todo/todo.component'
import {TodoService} from './services/todo.service';
import {AboutComponent} from './components/about/about.component';

@Component({
	selector: 'app-main',
	templateUrl: './app/main.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{
		path: '/todos/',
		name: 'Todos',
		component: TodoComponent,
		useAsDefault: true
	},
	{
		path: '/about',
		name: 'About',
		component: AboutComponent
	},
])

class Main {

}

bootstrap(Main, [TodoService, ROUTER_PROVIDERS]);
