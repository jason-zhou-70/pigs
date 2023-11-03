import { Breed, PigInterface, Category } from './pigInterface'

export abstract class Pig implements PigInterface {
    id: number;
    name: string;
    breed: Breed;
    height: number;
    weight: number;
    personality: string;
    category: Category;
    static totalPigs = 0;
    static idCount = 0;

    constructor(name: string, breed: Breed, height: number, weight: number, personality: string, category: Category){
        this.id = Pig.idCount;
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        this.category = category;
        Pig.totalPigs++;
        Pig.idCount++;
    }
}
