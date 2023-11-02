System.register(["./pigController", "./greyPig", "./pigInterface"], function (exports_1, context_1) {
    "use strict";
    var pigController_1, greyPig_1, pigInterface_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (pigController_1_1) {
                pigController_1 = pigController_1_1;
            },
            function (greyPig_1_1) {
                greyPig_1 = greyPig_1_1;
            },
            function (pigInterface_1_1) {
                pigInterface_1 = pigInterface_1_1;
            }
        ],
        execute: function () {
            controller = new pigController_1.PigController();
            document.getElementById("add").addEventListener('click', function () {
                var pig = new greyPig_1.GreyPig("Pork Chop", pigInterface_1.Breed.Potbelly, 10, 20, "Fair", 50);
                controller.add(pig);
            });
            document.getElementById("display").addEventListener('click', function () {
                console.log(controller.showAll());
            });
        }
    };
});
