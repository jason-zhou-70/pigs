System.register(["./pigController", "./greyPig", "./pigInterface"], function (exports_1, context_1) {
    "use strict";
    var pigController_1, greyPig_1, pigInterface_1, controller;
    var __moduleName = context_1 && context_1.id;
    function init() {
        initializeListeners();
        loadTable();
    }
    function initializeListeners() {
        document.getElementById("add").addEventListener('click', function () {
            var pig = new greyPig_1.GreyPig("Pork Chop", pigInterface_1.Breed.Potbelly, 10, 20, "Fair", 50);
            controller.add(pig);
            loadTable();
        });
    }
    function loadTable() {
        var table = document.getElementById("displayTable");
        var pigs = controller.showAll();
        document.getElementById("tableEntries").remove();
        for (let i = 0; i < pigs.length; i++) {
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let button = document.createElement("button");
            button.innerText = "Delete";
            button.addEventListener('click', function () {
                //controller.delete(pigs[i].id);
                console.log(pigs[i].id);
            });
            cell1.innerText = pigs[i].name;
            cell2.innerText = pigInterface_1.Breed[pigs[i].breed];
            cell3.append(button);
        }
    }
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
            window.onload = init;
        }
    };
});
