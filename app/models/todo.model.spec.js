System.register(['./todo.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo_model_1;
    return {
        setters:[
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            describe('Todo Model', function () {
                var todoModel;
                it('should create new todo model', function () {
                    var todoTitle = 'First Todo';
                    var todoStatus = 'Status';
                    todoModel = new todo_model_1.TodoModel({
                        title: todoTitle,
                        status: todoStatus
                    });
                    expect(todoModel.title).toBe(todoTitle);
                    expect(todoModel.status).toBe(todoStatus);
                });
            });
        }
    }
});
//# sourceMappingURL=todo.model.spec.js.map