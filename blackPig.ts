import { Breed, PigInterface } from './pigInterface'
import { Pig } from './pig'

export class BlackPig extends Pig {
    strengthScore: number;
    constructor(name: string, breed: Breed, height: number, weight: number, personality: string, strengthScore: number){
        super(name, breed, height, weight, personality);
        this.strengthScore = strengthScore;
    }
}