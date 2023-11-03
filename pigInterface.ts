export enum Breed {
    Potbelly
}

export enum Category {
    Black,
    White,
    Chestnut,
    Grey
}

export interface PigInterface {
    id: number;
    name: string;
    breed: Breed;
    height: number;
    weight: number;
    personality: string;
}

