System.register(["./pig"], function (exports_1, context_1) {
    "use strict";
    var pig_1, ChestnutPig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pig_1_1) {
                pig_1 = pig_1_1;
            }
        ],
        execute: function () {
            ChestnutPig = class ChestnutPig extends pig_1.Pig {
                constructor(name, breed, height, weight, personality, language) {
                    super(name, breed, height, weight, personality);
                    this.language = language;
                }
            };
            exports_1("ChestnutPig", ChestnutPig);
        }
    };
});
