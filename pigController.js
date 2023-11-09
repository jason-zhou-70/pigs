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
                    this.pigs = JSON.parse(localStorage.UserArray);
                    this.sortPigs();
                    return this.pigs;
                }
                sortPigs() {
                    const comparator = (pig1, pig2) => {
                        const compareCategory = pig1.category.toString().localeCompare(pig2.category.toString());
                        if (compareCategory === 0) {
                            return pig1.name.localeCompare(pig2.name);
                        }
                        return compareCategory;
                    };
                    this.pigs.sort(comparator);
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
