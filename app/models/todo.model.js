System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                function TodoModel(_a) {
                    var _b = _a === void 0 ? {} : _a, _c = _b.title, title = _c === void 0 ? undefined : _c, _d = _b.status, status = _d === void 0 ? undefined : _d;
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