export enum Breed {
    //Black
    Berkshire,
    Hampshire,
    LargeBlack,
    //White
    Yorkshire,
    Landrace,
    ChesterWhite,
    //Chestnut
    Tamworth,
    RedWattle,
    Hereford,
    //Grey
    Meishan,
    Lacombe,
    Minzhu
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
    strengthScore?: number;
    swimScore?: number;
    language?: string;
    runScore?: number;
}

