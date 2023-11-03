import { PigController } from './pigController'
import { Pig } from './pig'
import { GreyPig } from './greyPig'
import { Breed } from './pigInterface';

var controller: PigController = new PigController();

function init(){
    initializeListeners();
    loadTable();
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
        let button: HTMLButtonElement = <HTMLButtonElement> document.createElement("button");
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function(){
            controller.delete(pigs[i].id);
            //console.log(pigs[i].id);
            loadTable();
        });
        cell1.innerText = pigs[i].name;
        cell2.innerText = Breed[pigs[i].breed];
        cell3.append(button);
    }
}