import { Breed, PigInterface } from './pigInterface'
import { Pig } from './pig'

export class GreyPig extends Pig {
    swimScore: number;
    constructor(name: string, breed: Breed, height: number, weight: number, personality: string, swimScore: number){
        super(name, breed, height, weight, personality);
        this.swimScore = swimScore;
    }
}