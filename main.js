System.register(["./pigController", "./greyPig", "./pigInterface", "./blackPig", "./whitePig", "./chestnutPig"], function (exports_1, context_1) {
    "use strict";
    var pigController_1, greyPig_1, pigInterface_1, blackPig_1, whitePig_1, chestnutPig_1, controller;
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
            displayAddMenu();
        });
        document.getElementById("categoryInput").addEventListener("change", function () {
            const selectedOption = this;
            updateForm(parseInt(selectedOption.value));
        });
        document.getElementById("inputForm").addEventListener("submit", handleSubmission);
    }
    function displayAddMenu() {
        const addMenu = document.getElementById("addMenu");
        const infoMenu = document.getElementById("infoMenu");
        if (infoMenu.style.display == "block") {
            infoMenu.style.display = "none";
        }
        addMenu.style.display = "block";
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
            const cell4 = row.insertCell(3);
            const deleteButton = createDeleteButton(pig);
            const infoButton = createInfoButton(pig);
            cell1.innerText = pig.name;
            cell2.innerText = pigInterface_1.Category[pig.category];
            cell3.append(infoButton);
            cell4.append(deleteButton);
        }
    }
    function createDeleteButton(p) {
        const button = document.createElement("button");
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function () {
            controller.delete(p.id);
            document.getElementById("infoMenu").style.display = "none";
            loadTable();
        });
        return button;
    }
    function createInfoButton(p) {
        const button = document.createElement("button");
        button.innerText = "More Info";
        button.addEventListener('click', function () {
            loadInfo(p);
        });
        return button;
    }
    function loadInfo(p) {
        const table = document.getElementById("infoTable");
        table.rows[0].cells[1].innerText = p.name;
        table.rows[1].cells[1].innerText = pigInterface_1.Breed[p.breed];
        table.rows[2].cells[1].innerText = p.height.toString() + "hocks";
        table.rows[3].cells[1].innerText = p.weight.toString() + "stones";
        table.rows[5].cells[1].innerText = p.personality;
        switch (p.category) {
            case pigInterface_1.Category.Black:
                table.rows[4].cells[0].innerText = "Strength";
                table.rows[4].cells[1].innerText = p.strengthScore.toString();
                break;
            case pigInterface_1.Category.White:
                table.rows[4].cells[0].innerText = "Running";
                table.rows[4].cells[1].innerText = p.runScore.toString();
                break;
            case pigInterface_1.Category.Chestnut:
                table.rows[4].cells[0].innerText = "Language";
                table.rows[4].cells[1].innerText = p.language;
                break;
            case pigInterface_1.Category.Grey:
                table.rows[4].cells[0].innerText = "Swimming";
                table.rows[4].cells[1].innerText = p.swimScore.toString();
                break;
        }
        if (document.getElementById("addMenu").style.display == "block") {
            document.getElementById("addMenu").style.display = "none";
        }
        document.getElementById("infoMenu").style.display = "block";
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
        const row1 = table.insertRow();
        const cell1 = row1.insertCell(0);
        const cell2 = row1.insertCell(1);
        const input = document.createElement("input");
        input.name = "dynamicInput";
        const row2 = table.insertRow();
        const cell3 = row2.insertCell(0);
        const cell4 = row2.insertCell(1);
        cell3.innerHTML = "Breed";
        const select = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        const hiddenOption = document.createElement("option");
        hiddenOption.disabled = true;
        hiddenOption.selected = true;
        hiddenOption.hidden = true;
        select.add(hiddenOption);
        select.add(option1);
        select.add(option2);
        select.add(option3);
        select.id = "breedInput";
        select.required = true;
        switch (option) {
            case 0: //Black
                cell1.innerText = "Strength";
                input.type = "number";
                input.min = "1";
                input.max = "10";
                input.required = true;
                cell2.appendChild(input);
                option1.innerText = "Berkshire";
                option1.value = "0";
                option2.innerText = "Hampshire";
                option2.value = "1";
                option3.innerText = "Large Black";
                option3.value = "2";
                cell4.appendChild(select);
                break;
            case 1: //White
                cell1.innerText = "Running";
                input.type = "number";
                input.min = "0";
                input.max = "100";
                input.required = true;
                cell2.appendChild(input);
                option1.innerText = "Yorkshire";
                option1.value = "3";
                option2.innerText = "Landrace";
                option2.value = "4";
                option3.innerText = "Chester White";
                option3.value = "5";
                cell4.appendChild(select);
                break;
            case 2: //Chestnut
                cell1.innerText = "Language";
                input.type = "text";
                input.required = true;
                cell2.appendChild(input);
                option1.innerText = "Tamworth";
                option1.value = "6";
                option2.innerText = "Red Wattle";
                option2.value = "7";
                option3.innerText = "Hereford";
                option3.value = "8";
                cell4.appendChild(select);
                break;
            case 3: //Grey
                cell1.innerText = "Swimming";
                input.type = "number";
                input.min = "0";
                input.max = "100";
                input.required = true;
                cell2.appendChild(input);
                option1.innerText = "Meishan";
                option1.value = "9";
                option2.innerText = "Lacombe";
                option2.value = "10";
                option3.innerText = "Minzhu";
                option3.value = "11";
                cell4.appendChild(select);
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
        const category = document.getElementById("categoryInput");
        const dynamicType = parseInt(category.value);
        let dynamicInput;
        if (dynamicType == pigInterface_1.Category.Chestnut) {
            dynamicInput = data.get("dynamicInput").toString();
        }
        else {
            dynamicInput = parseInt(data.get("dynamicInput").toString());
        }
        const breedInput = document.getElementById("breedInput");
        const breed = parseInt(breedInput.value);
        let newPig;
        switch (breed) {
            case pigInterface_1.Breed.Berkshire:
            case pigInterface_1.Breed.Hampshire:
            case pigInterface_1.Breed.LargeBlack:
                const strength = dynamicInput;
                newPig = new blackPig_1.BlackPig(name, breed, height, weight, personality, strength);
                controller.add(newPig);
                loadTable();
                break;
            case pigInterface_1.Breed.Yorkshire:
            case pigInterface_1.Breed.Landrace:
            case pigInterface_1.Breed.ChesterWhite:
                const run = dynamicInput;
                newPig = new whitePig_1.WhitePig(name, breed, height, weight, personality, run);
                controller.add(newPig);
                loadTable();
                break;
            case pigInterface_1.Breed.Tamworth:
            case pigInterface_1.Breed.RedWattle:
            case pigInterface_1.Breed.Hereford:
                const language = dynamicInput;
                newPig = new chestnutPig_1.ChestnutPig(name, breed, height, weight, personality, language);
                controller.add(newPig);
                loadTable();
                break;
            case pigInterface_1.Breed.Meishan:
            case pigInterface_1.Breed.Lacombe:
            case pigInterface_1.Breed.Minzhu:
                const swim = dynamicInput;
                newPig = new greyPig_1.GreyPig(name, breed, height, weight, personality, swim);
                controller.add(newPig);
                loadTable();
                break;
        }
        resetForm(form);
        document.getElementById("addMenu").style.display = "none";
    }
    function resetForm(form) {
        const table = document.getElementById("addTable");
        table.deleteRow(6);
        table.deleteRow(5);
        form.reset();
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
            },
            function (blackPig_1_1) {
                blackPig_1 = blackPig_1_1;
            },
            function (whitePig_1_1) {
                whitePig_1 = whitePig_1_1;
            },
            function (chestnutPig_1_1) {
                chestnutPig_1 = chestnutPig_1_1;
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
