System.register(["./pigController", "./greyPig", "./pigInterface"], function (exports_1, context_1) {
    "use strict";
    var pigController_1, greyPig_1, pigInterface_1, controller;
    var __moduleName = context_1 && context_1.id;
    function init() {
        controller = new pigController_1.PigController();
        initializeListeners();
        loadTable();
        if (localStorage.idCount == null) {
            localStorage.idCount = 0;
        }
    }
    function initializeListeners() {
        document.getElementById("add").addEventListener('click', function () {
            var pig = new greyPig_1.GreyPig("Pork Chop", pigInterface_1.Breed.Potbelly, 10, 20, "Fair", 50);
            controller.add(pig);
            loadTable();
        });
    }
    function loadTable() {
        var table = document.getElementById("tableEntries");
        var pigs = controller.showAll();
        clearTableEntries(table);
        loadTableEntries(table, pigs);
    }
    function clearTableEntries(table) {
        var rows = table.querySelectorAll("tr");
        for (let i = 0; i < rows.length; i++) {
            rows[i].remove();
        }
    }
    function loadTableEntries(table, pigs) {
        for (let i = 0; i < pigs.length; i++) {
            let row = table.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            //let cell4: HTMLTableCellElement = row.insertCell(3);
            let deleteButton = createDeleteButton(pigs[i]);
            cell1.innerText = pigs[i].name;
            cell2.innerText = pigInterface_1.Category[pigs[i].category];
            cell3.append(deleteButton);
            //cell4.innerText = Category[pigs[i].category];
        }
    }
    function createDeleteButton(p) {
        let button = document.createElement("button");
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function () {
            controller.delete(p.id);
            loadTable();
        });
        return button;
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
            if (localStorage.idCount == null) {
                localStorage.idCount = 0;
            }
            window.onload = init;
        }
    };
});
