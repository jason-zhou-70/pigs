System.register(["./pig"], function (exports_1, context_1) {
    "use strict";
    var pig_1, WhitePig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pig_1_1) {
                pig_1 = pig_1_1;
            }
        ],
        execute: function () {
            WhitePig = class WhitePig extends pig_1.Pig {
                constructor(name, breed, height, weight, personality, runScore) {
                    super(name, breed, height, weight, personality);
                    this.runScore = runScore;
                }
            };
            exports_1("WhitePig", WhitePig);
        }
    };
});
