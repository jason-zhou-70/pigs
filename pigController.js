System.register([], function (exports_1, context_1) {
    "use strict";
    var PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigController = class PigController {
                constructor() {
                    this.pigs = JSON.parse(localStorage.UserArray);
                }
                add(p) {
                    this.pigs.push(p);
                    localStorage.UserArray = JSON.stringify(this.pigs);
                }
                delete(id) {
                    this.pigs = this.pigs.filter((p) => {
                        return p.id != id;
                    });
                    localStorage.UserArray = JSON.stringify(this.pigs);
                }
                showAll() {
                    return JSON.parse(localStorage.UserArray);
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
