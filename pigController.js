System.register(["./pig"], function (exports_1, context_1) {
    "use strict";
    var pig_1, PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pig_1_1) {
                pig_1 = pig_1_1;
            }
        ],
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
                    pig_1.Pig.totalPigs--;
                    localStorage.UserArray = JSON.stringify(this.pigs);
                }
                showAll() {
                    //return this.pigs;
                    return JSON.parse(localStorage.UserArray);
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
