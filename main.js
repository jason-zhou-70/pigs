System.register(["./pigController", "./greyPig", "./pigInterface"], function (exports_1, context_1) {
    "use strict";
    var pigController_1, greyPig_1, pigInterface_1, controller;
    var __moduleName = context_1 && context_1.id;
    function init() {
        if (localStorage.idCount == null) {
            localStorage.idCount = 0;
        }
        if (localStorage.UserArray == null) {
            localStorage.UserArray = JSON.stringify([]);
        }
        initializeListeners();
        loadTable();
    }
    function initializeListeners() {
        document.getElementById("add").addEventListener('click', function () {
            const pig = new greyPig_1.GreyPig("Pork Chop", pigInterface_1.Breed.Potbelly, 10, 20, "Fair", 50);
            controller.add(pig);
            loadTable();
        });
        document.getElementById("categoryInput").addEventListener("change", function () {
            const selectedOption = this;
            updateForm(parseInt(selectedOption.value));
        });
        document.getElementById("inputForm").addEventListener("submit", handleSubmission);
    }
    function loadTable() {
        const table = document.getElementById("tableEntries");
        const pigs = controller.showAll();
        clearTableEntries(table);
        loadTableEntries(table, pigs);
    }
    function clearTableEntries(table) {
        const rows = table.querySelectorAll("tr");
        for (let row of rows) {
            row.remove();
        }
    }
    function loadTableEntries(table, pigs) {
        for (let pig of pigs) {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            //let cell4: HTMLTableCellElement = row.insertCell(3);
            const deleteButton = createDeleteButton(pig);
            cell1.innerText = pig.name;
            cell2.innerText = pigInterface_1.Category[pig.category];
            cell3.append(deleteButton);
            //cell4.innerText = Category[pigs[i].category];
        }
    }
    function createDeleteButton(p) {
        const button = document.createElement("button");
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function () {
            controller.delete(p.id);
            loadTable();
        });
        return button;
    }
    function updateForm(option) {
        const table = document.getElementById("addTable");
        if (table.rows.length < 6) {
            addInputRow(option, table);
        }
        else {
            updateInputRow(option, table);
        }
    }
    function addInputRow(option, table) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const input = document.createElement("input");
        input.name = "dynamicInput";
        switch (option) {
            case 0: //Black
                cell1.innerText = "Strength";
                input.type = "number";
                input.min = "1";
                input.max = "10";
                input.required = true;
                cell2.appendChild(input);
                break;
            case 1: //White
                cell1.innerText = "Running";
                input.type = "number";
                input.min = "0";
                input.max = "100";
                input.required = true;
                cell2.appendChild(input);
                break;
            case 2: //Chestnut
                cell1.innerText = "Language";
                input.type = "text";
                input.required = true;
                cell2.appendChild(input);
                break;
            case 3: //Grey
                cell1.innerText = "Swimming";
                input.type = "number";
                input.min = "0";
                input.max = "100";
                input.required = true;
                cell2.appendChild(input);
                break;
        }
    }
    function updateInputRow(option, table) {
        const cell1 = table.rows[5].cells[0];
        const cell2 = table.rows[5].cells[1];
        const input = cell2.childNodes[0];
        switch (option) {
            case 0: //Black
                cell1.innerText = "Strength";
                input.type = "number";
                input.min = "1";
                input.max = "10";
                input.required = true;
                break;
            case 1: //White
                cell1.innerText = "Running";
                input.type = "number";
                input.min = "0";
                input.max = "100";
                input.required = true;
                break;
            case 2: //Chestnut
                cell1.innerText = "Language";
                input.type = "text";
                input.required = true;
                break;
            case 3: //Grey
                cell1.innerText = "Swimming";
                input.type = "number";
                input.min = "0";
                input.max = "100";
                input.required = true;
                break;
        }
    }
    function handleSubmission(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const name = data.get("nameInput").toString();
        const height = parseInt(data.get("heightInput").toString());
        const weight = parseInt(data.get("weightInput").toString());
        const personality = data.get("personalityInput").toString();
        //TODO: Add breeds for each category
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
            if (localStorage.idCount == null) {
                localStorage.idCount = 0;
            }
            window.onload = init;
        }
    };
});
