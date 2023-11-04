import { PigController } from './pigController'
import { Pig } from './pig'
import { GreyPig } from './greyPig'
import { Breed, Category } from './pigInterface';

var controller: PigController;
if (localStorage.idCount == null){
    localStorage.idCount = 0;
}

function init(){
    controller = new PigController();
    initializeListeners();
    loadTable();
    if (localStorage.idCount == null){
        localStorage.idCount = 0;
    }
}

window.onload = init;

function initializeListeners(): void{
    document.getElementById("add")!.addEventListener('click', function(){
        var pig: Pig = new GreyPig("Pork Chop", Breed.Potbelly, 10, 20, "Fair", 50);
        controller.add(pig);
        loadTable();
    })
}

function loadTable(){
    var table: HTMLTableSectionElement = <HTMLTableSectionElement> document.getElementById("tableEntries");
    var pigs: Pig[] = controller.showAll();
    clearTableEntries(table);
    loadTableEntries(table, pigs);
}

function clearTableEntries(table: HTMLTableSectionElement): void {
    var rows: NodeListOf<HTMLTableRowElement> = table.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++){
        rows[i].remove();
    }
}

function loadTableEntries(table: HTMLTableSectionElement, pigs: Pig[]): void {
    for (let i = 0; i < pigs.length; i++){
        let row: HTMLTableRowElement = table.insertRow();
        let cell1: HTMLTableCellElement = row.insertCell(0);
        let cell2: HTMLTableCellElement = row.insertCell(1);
        let cell3: HTMLTableCellElement = row.insertCell(2);
        //let cell4: HTMLTableCellElement = row.insertCell(3);
        let deleteButton: HTMLButtonElement = createDeleteButton(pigs[i]);
        cell1.innerText = pigs[i].name;
        cell2.innerText = Category[pigs[i].category];
        cell3.append(deleteButton);
        //cell4.innerText = Category[pigs[i].category];
    }
}

function createDeleteButton(p: Pig): HTMLButtonElement {
    let button: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function(){
            controller.delete(p.id);
            loadTable();
        });
    return button;
}