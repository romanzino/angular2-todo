System.register(['angular2/core', '../services/todo.service', './todo-search.component', '../pipes/todo-search.pipe'], function(exports_1, context_1) {
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
    var core_1, todo_service_1, todo_search_component_1, todo_search_pipe_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_search_component_1_1) {
                todo_search_component_1 = todo_search_component_1_1;
            },
            function (todo_search_pipe_1_1) {
                todo_search_pipe_1 = todo_search_pipe_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(TodoService) {
                    this.TodoService = TodoService;
                    this.searchTerm = '';
                }
                TodoListComponent.prototype.removeTodo = function (todoId) {
                    this.TodoService.removeTodo(todoId);
                };
                TodoListComponent.prototype.editTodo = function (todoId) {
                    this.todoIdThatIsEdited = todoId;
                };
                TodoListComponent.prototype.toggleStateOfTodo = function (todoId) {
                    this.TodoService.toggleStateOfTodo(todoId);
                };
                TodoListComponent.prototype.tryToStopEditingTodo = function (todoTitle, event) {
                    if (event.type === 'keypress') {
                        //13 is a code of enter button
                        if (event.keyCode === 13) {
                            this.stopEditingTodo(todoTitle);
                        }
                    }
                    else if (event.type === 'blur') {
                        if (this.todoIdThatIsEdited > -1) {
                            this.stopEditingTodo(todoTitle);
                        }
                    }
                };
                TodoListComponent.prototype.stopEditingTodo = function (todoTitle) {
                    this.TodoService.updateTodo({
                        todoId: this.todoIdThatIsEdited,
                        todoTitle: todoTitle
                    });
                    this.todoIdThatIsEdited = -1;
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [todo_search_component_1.TodoSearchComponent],
                        pipes: [todo_search_pipe_1.TodoSearchPipe],
                        templateUrl: './app/components/templates/todo-list.component.html',
                        styleUrls: ['./app/components/todo-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map