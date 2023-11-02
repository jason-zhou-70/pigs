System.register([], function (exports_1, context_1) {
    "use strict";
    var Pig;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pig = class Pig {
                constructor(name, breed, height, weight, personality) {
                    this.id = Pig.idCount;
                    this.name = name;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.personality = personality;
                    Pig.totalPigs++;
                    Pig.idCount++;
                }
            };
            exports_1("Pig", Pig);
            Pig.totalPigs = 0;
            Pig.idCount = 0;
        }
    };
});
