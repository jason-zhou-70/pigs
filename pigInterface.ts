export enum Breed {
    Potbelly
}

export interface PigInterface {
    id: number;
    name: string;
    breed: Breed;
    height: number;
    weight: number;
    personality: string;
}

