import { Breed, Category } from './pigInterface'
import { Pig } from './pig'

export class ChestnutPig extends Pig {
    language: string;
    constructor(name: string, breed: Breed, height: number, weight: number, personality: string, language: string){
        super(name, breed, height, weight, personality, Category.Chestnut);
        this.language = language;
    }
}