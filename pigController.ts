import { PigServices } from "./pigService";
import { Pig } from "./pig";

export class PigController implements PigServices {
    pigs: Pig[];

    constructor() {
        if (Number.isNaN(localStorage.idCount)){
            localStorage.idCount = 0;
        }
        if (localStorage.UserArray == null){
            localStorage.UserArray = JSON.stringify([]);
        }
        this.pigs = JSON.parse(localStorage.UserArray);
    }

    add(p: Pig): void {
        this.pigs.push(p);
        localStorage.UserArray = JSON.stringify(this.pigs);
    }
    
    delete(id: number): void {
        this.pigs = this.pigs.filter((p)=>{
            return p.id != id;
        });
        localStorage.UserArray = JSON.stringify(this.pigs);
    }

    showAll(): Pig[] {
        this.pigs = JSON.parse(localStorage.UserArray);
        this.sortPigs();
        return this.pigs;
    }

    sortPigs(): void {
        const comparator = (pig1: Pig, pig2: Pig): number => {
            const compareCategory = pig1.category.toString().localeCompare(pig2.category.toString());
            if (compareCategory === 0){
                return pig1.name.localeCompare(pig2.name);
            }
            return compareCategory;
        }
        this.pigs.sort(comparator);
    }
}