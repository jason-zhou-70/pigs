import { PigController } from './pigController'
import { Pig } from './pig'
import { GreyPig } from './greyPig'
import { Breed, Category } from './pigInterface';
import { BlackPig } from './blackPig';
import { WhitePig } from './whitePig';
import { ChestnutPig } from './chestnutPig';

const controller: PigController = new PigController();
if (localStorage.idCount == null){
    localStorage.idCount = 0;
}

function init(){
    initializeListeners();
    loadTable();
}

window.onload = init;

function initializeListeners(): void{
    document.getElementById("add")!.addEventListener('click', function(){
        displayAddMenu();
    })
    document.getElementById("categoryInput")!.addEventListener("change", function(){
        const selectedOption: HTMLSelectElement = this as HTMLSelectElement;
        updateForm(parseInt(selectedOption.value));
    })
    document.getElementById("inputForm")!.addEventListener("submit", handleSubmission);
}

function displayAddMenu(): void {
    const addMenu: HTMLElement = document.getElementById("addMenu") as HTMLElement;
    const infoMenu: HTMLElement = document.getElementById("infoMenu") as HTMLElement;
    if (infoMenu.style.display == "block"){
        infoMenu.style.display = "none";
    }
    addMenu.style.display = "block";
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
        const row: HTMLTableRowElement = table.insertRow() as HTMLTableRowElement;
        const cell1: HTMLTableCellElement = row.insertCell(0) as HTMLTableCellElement;
        const cell2: HTMLTableCellElement = row.insertCell(1) as HTMLTableCellElement;
        const cell3: HTMLTableCellElement = row.insertCell(2) as HTMLTableCellElement;
        const cell4: HTMLTableCellElement = row.insertCell(3) as HTMLTableCellElement;
        const deleteButton: HTMLButtonElement = createDeleteButton(pig) as HTMLButtonElement;
        const infoButton: HTMLButtonElement = createInfoButton(pig) as HTMLButtonElement;
        cell1.innerText = pig.name;
        cell2.innerText = Category[pig.category];
        cell3.append(infoButton);
        cell4.append(deleteButton);
    }
}

function createDeleteButton(p: Pig): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
        button.className = "deleteButton";
        button.innerText = "Delete";
        button.addEventListener('click', function(){
            controller.delete(p.id);
            document.getElementById("infoMenu")!.style.display = "none";
            loadTable();
        });
    return button;
}

function createInfoButton(p: Pig): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
    button.innerText = "More Info";
    button.addEventListener('click', function(){
        loadInfo(p);
    });
    return button;
}

function loadInfo(p: Pig): void {
    const table: HTMLTableElement = document.getElementById("infoTable") as HTMLTableElement;
    table.rows[0].cells[1].innerText = p.name;
    table.rows[1].cells[1].innerText = Breed[p.breed];
    table.rows[2].cells[1].innerText = p.height.toString() + "hocks";
    table.rows[3].cells[1].innerText = p.weight.toString() + "stones";
    table.rows[5].cells[1].innerText = p.personality;
    switch(p.category){
        case Category.Black:
            table.rows[4].cells[0].innerText = "Strength";
            table.rows[4].cells[1].innerText = p.strengthScore!.toString();
            break;
        case Category.White:
            table.rows[4].cells[0].innerText = "Running";
            table.rows[4].cells[1].innerText = p.runScore!.toString();
            break;
        case Category.Chestnut:
            table.rows[4].cells[0].innerText = "Language";
            table.rows[4].cells[1].innerText = p.language as string;
            break;
        case Category.Grey:
            table.rows[4].cells[0].innerText = "Swimming";
            table.rows[4].cells[1].innerText = p.swimScore!.toString();
            break;
    }
    if (document.getElementById("addMenu")!.style.display == "block"){
        document.getElementById("addMenu")!.style.display = "none";
    }
    document.getElementById("infoMenu")!.style.display = "block";
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
    const row1: HTMLTableRowElement = table.insertRow() as HTMLTableRowElement;
    const cell1: HTMLTableCellElement = row1.insertCell(0) as HTMLTableCellElement;
    const cell2: HTMLTableCellElement = row1.insertCell(1) as HTMLTableCellElement;
    const input: HTMLInputElement = document.createElement("input") as HTMLInputElement;
    input.name = "dynamicInput";
    input.autocomplete = "off";

    const row2: HTMLTableRowElement = table.insertRow() as HTMLTableRowElement;
    const cell3: HTMLTableCellElement = row2.insertCell(0) as HTMLTableCellElement;
    const cell4: HTMLTableCellElement = row2.insertCell(1) as HTMLTableCellElement;
    cell3.innerHTML = "Breed";
    const select: HTMLSelectElement = document.createElement("select") as HTMLSelectElement;
    const option1: HTMLOptionElement = document.createElement("option");
    const option2: HTMLOptionElement = document.createElement("option");
    const option3: HTMLOptionElement = document.createElement("option");
    const hiddenOption: HTMLOptionElement = document.createElement("option");
    hiddenOption.disabled = true;
    hiddenOption.selected = true;
    hiddenOption.hidden = true;
    select.add(hiddenOption);
    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.id = "breedInput";
    select.required = true;
    switch (option){
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

function updateInputRow(option: number, table: HTMLTableElement): void {
    const cell1: HTMLTableCellElement = table.rows[5].cells[0];
    const cell2: HTMLTableCellElement = table.rows[5].cells[1];
    const input: HTMLInputElement = cell2.childNodes[0] as HTMLInputElement;

    const cell4: HTMLTableCellElement = table.rows[6].cells[1];
    const select: HTMLSelectElement = cell4.childNodes[0] as HTMLSelectElement;
    select.options[0].selected = true;
    switch (option){
        case 0: //Black
            cell1.innerText = "Strength";
            input.type = "number";
            input.min = "1";
            input.max = "10";
            input.value = "";
            input.required = true;

            select.options[1].innerText = "Berkshire";
            select.options[1].value = "0";
            select.options[2].innerText = "Hampshire";
            select.options[2].value = "1";
            select.options[3].innerText = "Large Black";
            select.options[3].value = "2";
            break;
        case 1: //White
            cell1.innerText = "Running";
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "";
            input.required = true;

            select.options[1].innerText = "Yorkshire";
            select.options[1].value = "3";
            select.options[2].innerText = "Landrace";
            select.options[2].value = "4";
            select.options[3].innerText = "Chester White";
            select.options[3].value = "5";
            break;
        case 2: //Chestnut
            cell1.innerText = "Language";
            input.type = "text";
            input.value = "";
            input.required = true;

            select.options[1].innerText = "Tamworth";
            select.options[1].value = "6";
            select.options[2].innerText = "Red Wattle";
            select.options[2].value = "7";
            select.options[3].innerText = "Hereford";
            select.options[3].value = "8";
            break;
        case 3: //Grey
            cell1.innerText = "Swimming";
            input.type = "number";
            input.min = "0";
            input.max = "100";
            input.value = "";
            input.required = true;

            select.options[1].innerText = "Meishan";
            select.options[1].value = "9";
            select.options[2].innerText = "Lacombe";
            select.options[2].value = "10";
            select.options[3].innerText = "Minzhu";
            select.options[3].value = "11";
            break;
    }
}

function handleSubmission(event: Event): void {
    event.preventDefault();

    const form: HTMLFormElement = event.target as HTMLFormElement;
    const data: FormData = new FormData(form);
    
    const name: string = data.get("nameInput")!.toString() as string;
    const height: number = parseInt(data.get("heightInput")!.toString()) as number;
    const weight: number = parseInt(data.get("weightInput")!.toString()) as number;
    const personality: string = data.get("personalityInput")!.toString() as string;

    const category: HTMLSelectElement = document.getElementById("categoryInput") as HTMLSelectElement;
    const dynamicType: number = parseInt(category.value) as number;
    let dynamicInput: string | number;
    if (dynamicType == Category.Chestnut){
        dynamicInput = data.get("dynamicInput")!.toString() as string;
    }
    else{
        dynamicInput = parseInt(data.get("dynamicInput")!.toString()) as number;
    }

    const breedInput: HTMLSelectElement = document.getElementById("breedInput") as HTMLSelectElement;
    const breed: Breed = parseInt(breedInput.value) as Breed;

    let newPig: Pig;
    switch (breed){
        case Breed.Berkshire: case Breed.Hampshire: case Breed.LargeBlack:
            const strength: number = dynamicInput as number;
            newPig = new BlackPig(name, breed, height, weight, personality, strength);
            controller.add(newPig);
            loadTable();
            break;
        case Breed.Yorkshire: case Breed.Landrace: case Breed.ChesterWhite:
            const run: number = dynamicInput as number;
            newPig = new WhitePig(name, breed, height, weight, personality, run);
            controller.add(newPig);
            loadTable();
            break;
        case Breed.Tamworth: case Breed.RedWattle: case Breed.Hereford:
            const language: string = dynamicInput as string;
            newPig = new ChestnutPig(name, breed, height, weight, personality, language);
            controller.add(newPig);
            loadTable();
            break;
        case Breed.Meishan: case Breed.Lacombe: case Breed.Minzhu:
            const swim: number = dynamicInput as number;
            newPig = new GreyPig(name, breed, height, weight, personality, swim);
            controller.add(newPig);
            loadTable();
            break;
    }
    resetForm(form);
    document.getElementById("addMenu")!.style.display = "none";
}

function resetForm(form: HTMLFormElement): void{
    const table: HTMLTableElement = document.getElementById("addTable") as HTMLTableElement;
    table.deleteRow(6);
    table.deleteRow(5);
    form.reset();
}