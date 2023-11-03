System.register(["./pigInterface", "./pig"], function (exports_1, context_1) {
    "use strict";
    var pigInterface_1, pig_1, GreyPig;
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
            GreyPig = class GreyPig extends pig_1.Pig {
                constructor(name, breed, height, weight, personality, swimScore) {
                    super(name, breed, height, weight, personality, pigInterface_1.Category.Grey);
                    this.swimScore = swimScore;
                }
            };
            exports_1("GreyPig", GreyPig);
        }
    };
});
