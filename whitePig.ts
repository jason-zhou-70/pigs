import { Breed, PigInterface } from './pigInterface'
import { Pig } from './pig'

export class WhitePig extends Pig {
    runScore: number;
    constructor(name: string, breed: Breed, height: number, weight: number, personality: string, runScore: number){
        super(name, breed, height, weight, personality);
        this.runScore = runScore;
    }
}