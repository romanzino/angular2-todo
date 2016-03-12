System.register(['angular2/core', '../../services/todo.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, todo_service_1, router_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(TodoService, router, routeParams) {
                    this.TodoService = TodoService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.todos = [];
                    this.searchTerm = '';
                    this.todosCountUpdate = new core_1.EventEmitter();
                    this.todosStatus = routeParams.get('todoStatus');
                    this.filterTodosByStatus();
                    this.todosCount = this.todos.length;
                }
                TodoListComponent.prototype.ngOnInit = function () {
                    this.todosCountUpdate.emit(this.todosCount);
                };
                TodoListComponent.prototype.ngOnChanges = function (changes) {
                    if (changes['searchTerm']) {
                        if (typeof this.searchTerm === 'string') {
                            this.filterTodosBySearchTerm();
                            this.afterFilteringTodos();
                        }
                    }
                };
                TodoListComponent.prototype.removeTodo = function (todo) {
                    this.TodoService.removeTodo(todo);
                };
                TodoListComponent.prototype.editTodo = function (todo) {
                    this.todoThatIsEdited = todo;
                };
                TodoListComponent.prototype.toggleStateOfTodo = function (todo) {
                    this.TodoService.toggleStateOfTodo(todo);
                    this.filterTodosByStatus();
                    this.afterFilteringTodos();
                };
                TodoListComponent.prototype.tryToStopEditingTodo = function (todoTitle, event) {
                    if (event.type === 'keypress') {
                        //13 is a code of enter button
                        if (event.keyCode === 13) {
                            this.stopEditingTodo(todoTitle);
                        }
                    }
                    else if (event.type === 'blur') {
                        if (this.todoThatIsEdited) {
                            this.stopEditingTodo(todoTitle);
                        }
                    }
                };
                TodoListComponent.prototype.stopEditingTodo = function (todoTitle) {
                    this.TodoService.updateTodo({
                        todo: this.todoThatIsEdited,
                        todoTitle: todoTitle
                    });
                    this.todoThatIsEdited = undefined;
                };
                TodoListComponent.prototype.filterTodosByStatus = function () {
                    var _this = this;
                    if (typeof this.todosStatus === 'string') {
                        return this.todos = this.TodoService.todos.filter(function (item) {
                            if (item.status === _this.todosStatus) {
                                return true;
                            }
                        });
                    }
                    return this.todos = this.TodoService.todos;
                };
                TodoListComponent.prototype.filterTodosBySearchTerm = function () {
                    var _this = this;
                    return this.todos = this.TodoService.todos.filter(function (item) {
                        if (item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1) {
                            return true;
                        }
                    });
                };
                TodoListComponent.prototype.afterFilteringTodos = function () {
                    this.todosCount = this.todos.length;
                    this.todosCountUpdate.emit(this.todosCount);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TodoListComponent.prototype, "searchTerm", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TodoListComponent.prototype, "todosCountUpdate", void 0);
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: './app/components/todo-list/todo-list.component.html',
                        styleUrls: ['./app/components/todo-list/todo-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.Router, router_1.RouteParams])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map