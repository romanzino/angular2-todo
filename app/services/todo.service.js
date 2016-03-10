System.register(['../models/todo.model', 'angular2/core'], function(exports_1, context_1) {
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
    var todo_model_1, core_1;
    var TodoService;
    return {
        setters:[
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService() {
                    this.todos = [];
                    this.todosStatus = ['active', 'completed'];
                    this.localStorageIndex = 'angular2-todo';
                    var todosFromLocalStorage = JSON.parse(localStorage.getItem(this.localStorageIndex) || '[]');
                    for (var _i = 0, todosFromLocalStorage_1 = todosFromLocalStorage; _i < todosFromLocalStorage_1.length; _i++) {
                        var todo = todosFromLocalStorage_1[_i];
                        this.todos.push(todo);
                    }
                }
                TodoService.prototype.createTodo = function (todo) {
                    todo.status = this.todosStatus[0];
                    this.todos.push(new todo_model_1.TodoModel(todo));
                    this.saveTodos();
                };
                TodoService.prototype.removeTodo = function (todo) {
                    this.todos.splice(this.findIndexOfTodo(todo), 1);
                    this.saveTodos();
                };
                TodoService.prototype.updateTodo = function (_a) {
                    var todo = _a.todo, todoTitle = _a.todoTitle;
                    this.findTodo(todo).title = todoTitle;
                    this.saveTodos();
                };
                TodoService.prototype.toggleStateOfTodo = function (todo) {
                    if (todo.status === this.todosStatus[0]) {
                        todo.status = this.todosStatus[1];
                    }
                    else {
                        todo.status = this.todosStatus[0];
                    }
                    this.saveTodos();
                };
                TodoService.prototype.markAllTodosAsCompleted = function () {
                    for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                        var todo = _a[_i];
                        if (todo.status === this.todosStatus[0]) {
                            todo.status = this.todosStatus[1];
                        }
                    }
                    this.saveTodos();
                };
                TodoService.prototype.saveTodos = function () {
                    var data = JSON.stringify(this.todos);
                    localStorage.setItem(this.localStorageIndex, data);
                };
                TodoService.prototype.findTodo = function (todo) {
                    return this.todos[this.todos.indexOf(todo)];
                };
                TodoService.prototype.findIndexOfTodo = function (todo) {
                    return this.todos.indexOf(todo);
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map