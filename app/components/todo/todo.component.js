System.register(['angular2/core', '../todo-add/todo-add.component', '../todo-list/todo-list.component', '../todo-search/todo-search.component', '../todo-actions/todo-actions.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_add_component_1, todo_list_component_1, todo_search_component_1, todo_actions_component_1, router_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_add_component_1_1) {
                todo_add_component_1 = todo_add_component_1_1;
            },
            function (todo_list_component_1_1) {
                todo_list_component_1 = todo_list_component_1_1;
            },
            function (todo_search_component_1_1) {
                todo_search_component_1 = todo_search_component_1_1;
            },
            function (todo_actions_component_1_1) {
                todo_actions_component_1 = todo_actions_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TodoComponent = (function () {
                function TodoComponent(router, routeParams) {
                    this.router = router;
                    this.routeParams = routeParams;
                    this.filterByTodosStatus = routeParams.get('todoStatus');
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-app',
                        directives: [todo_add_component_1.TodoAddComponent, todo_list_component_1.TodoListComponent, todo_search_component_1.TodoSearchComponent, todo_actions_component_1.TodoActionsComponent],
                        templateUrl: './app/components/todo/todo.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map