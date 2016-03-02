System.register(['angular2/platform/browser', './components/todo.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, todo_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todo_component_1.TodoComponent);
        }
    }
});
//# sourceMappingURL=main.js.map