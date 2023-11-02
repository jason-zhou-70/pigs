import { Breed, PigInterface } from './pigInterface'

export class Pig implements PigInterface {
    id: number;
    name: string;
    breed: Breed;
    height: number;
    weight: number;
    personality: string;
    static totalPigs = 0;
    static idCount = 0;

    constructor(name: string, breed: Breed, height: number, weight: number, personality: string){
        this.id = Pig.idCount;
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        Pig.totalPigs++;
        Pig.idCount++;
    }
}