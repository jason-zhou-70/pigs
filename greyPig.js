System.register(["./pig"], function (exports_1, context_1) {
    "use strict";
    var pig_1, GreyPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pig_1_1) {
                pig_1 = pig_1_1;
            }
        ],
        execute: function () {
            GreyPig = class GreyPig extends pig_1.Pig {
                constructor(name, breed, height, weight, personality, swimScore) {
                    super(name, breed, height, weight, personality);
                    this.swimScore = swimScore;
                }
            };
            exports_1("GreyPig", GreyPig);
        }
    };
});
