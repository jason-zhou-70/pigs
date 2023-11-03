import { PigServices } from "./pigService";
import { Pig } from "./pig";

export class PigController implements PigServices {
    pigs: Pig[];

    constructor() {
        this.pigs = JSON.parse(localStorage.UserArray);
    }

    add(p: Pig) {
        this.pigs.push(p);
        localStorage.UserArray = JSON.stringify(this.pigs);
    }
    
    delete(id: number) {
        this.pigs = this.pigs.filter((p)=>{
            return p.id != id;
        });
        Pig.totalPigs--;
        localStorage.UserArray = JSON.stringify(this.pigs);
    }

    showAll() {
        //return this.pigs;
        return JSON.parse(localStorage.UserArray);
    }

}