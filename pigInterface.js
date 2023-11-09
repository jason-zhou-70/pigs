System.register([], function (exports_1, context_1) {
    "use strict";
    var Breed, Category;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Breed) {
                //Black
                Breed[Breed["Berkshire"] = 0] = "Berkshire";
                Breed[Breed["Hampshire"] = 1] = "Hampshire";
                Breed[Breed["LargeBlack"] = 2] = "LargeBlack";
                //White
                Breed[Breed["Yorkshire"] = 3] = "Yorkshire";
                Breed[Breed["Landrace"] = 4] = "Landrace";
                Breed[Breed["ChesterWhite"] = 5] = "ChesterWhite";
                //Chestnut
                Breed[Breed["Tamworth"] = 6] = "Tamworth";
                Breed[Breed["RedWattle"] = 7] = "RedWattle";
                Breed[Breed["Hereford"] = 8] = "Hereford";
                //Grey
                Breed[Breed["Meishan"] = 9] = "Meishan";
                Breed[Breed["Lacombe"] = 10] = "Lacombe";
                Breed[Breed["Minzhu"] = 11] = "Minzhu";
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
