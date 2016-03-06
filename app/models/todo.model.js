System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                function TodoModel(_a) {
                    var title = _a.title, _b = _a.status, status = _b === void 0 ? 'started' : _b;
                    this.title = title;
                    this.status = status;
                }
                return TodoModel;
            }());
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todo.model.js.map