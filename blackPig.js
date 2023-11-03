System.register(["./pigInterface", "./pig"], function (exports_1, context_1) {
    "use strict";
    var pigInterface_1, pig_1, BlackPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pigInterface_1_1) {
                pigInterface_1 = pigInterface_1_1;
            },
            function (pig_1_1) {
                pig_1 = pig_1_1;
            }
        ],
        execute: function () {
            BlackPig = class BlackPig extends pig_1.Pig {
                constructor(name, breed, height, weight, personality, strengthScore) {
                    super(name, breed, height, weight, personality, pigInterface_1.Category.Black);
                    this.strengthScore = strengthScore;
                }
            };
            exports_1("BlackPig", BlackPig);
        }
    };
});
