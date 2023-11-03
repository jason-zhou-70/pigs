System.register([], function (exports_1, context_1) {
    "use strict";
    var Breed, Category;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Breed) {
                Breed[Breed["Potbelly"] = 0] = "Potbelly";
            })(Breed || (exports_1("Breed", Breed = {})));
            (function (Category) {
                Category[Category["Black"] = 0] = "Black";
                Category[Category["White"] = 1] = "White";
                Category[Category["Chestnut"] = 2] = "Chestnut";
                Category[Category["Grey"] = 3] = "Grey";
            })(Category || (exports_1("Category", Category = {})));
        }
    };
});
