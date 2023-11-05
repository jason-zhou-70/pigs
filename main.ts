import { PigController } from './pigController'
import { Pig } from './pig'
import { GreyPig } from './greyPig'
import { Breed, Category } from './pigInterface';

const controller: PigController = new PigController();
if (localStorage.idCount == null){
    localStorage.idCount = 0;
}

function init(){
    if (localStorage.idCount == null){
        localStorage.idCount = 0;
    }
    if (localStorage.UserArray == null){
        localStorage.UserArray = JSON.stringify([]);
    }
    initializeListeners();
    loadTable();
}

window.onload = init;

function initializeListeners(): void{
    document.getElementById("add")!.addEventListener('click', function(){
        const pig: Pig = new GreyPig("Pork Chop", Breed.Potbelly, 10, 20, "Fair", 50);
        controller.add(pig);
        loadTable();
    })
    document.getElementById("categoryInput")!.addEventListener("change", function(){
        const selectedOption: HTMLSelectElement = this as HTMLSelectElement;
        updateForm(parseInt(selectedOption.value));
    })
    document.getElementById("inputForm")!.addEventListener("submit", handleSubmission);
}

function loadTable(){
    const table: HTMLTableSectionElement = document.getElementById("tableEntries") as HTMLTableSectionElement;
    const pigs: Pig[] = controller.showAll();
    clearTableEntries(table);
    loadTableEntries(table, pigs);
}

function clearTableEntries(table: HTMLTableSectionElement): void {
    const rows: NodeListOf<HTMLTableRowElement> = table.querySelectorAll("tr");
    for (let row of rows){
        row.remove();
    }
}

function loadTableEntries(table: HTMLTableSectionElement, pigs: Pig[]): void {
    for (let pig of pigs){
        const row: HTMLTableRowElement = table.insertRow();
        const cell1: HTMLTableCellElement = row.insertCell(0);
        const cell2: HTMLTableCellElement = row.insertCell(1);
        const cell3: HTMLTableCellElement = row.insertCell(2);
        //let cell4: HTMLTableCellElement = row.insertCell(3);
        const deleteButton: HTMLButtonElement = createDeleteButton(pig);
        cell1.innerText = pig.name;
        cell2.innerText = Category[pig.category];
        cell3.append(deleteButton);
        //cell4.innerText = Category[pigs[i].category];
    }
}

function createDeleteButton(p: Pig): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function(){
            controller.delete(p.id);
            loadTable();
        });
    return button;
}

function updateForm(option: number): void {
    const table: HTMLTableElement = document.getElementById("addTable") as HTMLTableElement;
    if (table.rows.length < 6) {
        addInputRow(option, table);
    }
    else {
        updateInputRow(option, table);
    }
}

function addInputRow(option: number, table: HTMLTableElement): void{
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    const input: HTMLInputElement = document.createElement("input");
    input.id = "dynamicInput"
    switch (option){
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

function updateInputRow(option: number, table: HTMLTableElement): void {
    const cell1: HTMLTableCellElement = table.rows[5].cells[0];
    const cell2: HTMLTableCellElement = table.rows[5].cells[1];
    const input: HTMLInputElement = cell2.childNodes[0] as HTMLInputElement;
    switch (option){
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

function handleSubmission(event: Event): void {
    event.preventDefault();

    const form: HTMLFormElement = event.target as HTMLFormElement;
    
}

// const category = document.getElementById("categorySelect") as HTMLSelectElement;
// const tableBody = document.getElementById("tableBody") as HTMLTableSectionElement;
// const categoryData = whatever your data is

// const updateTable = () => {
//         const selectedCategory = categorySelect.value;
//         const pigs = categoryData[selectedCategory] || [];

//         for (const pig of pigs) {
//             const row = document.createElement("tr");
//             row.innerHTML = <td>${pig.data}</td><td>${pig.otherData}</td>;
//             tableBody.appendChild(row);
//         }
//     };

// categorySelect.addEventListener("change", updateTable);