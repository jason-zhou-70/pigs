import { Pig } from './pig'

export interface PigServices {
    add(p: Pig): void;
    delete(id: number): void;
    showAll(): Pig[];
    //showByCategory(category: string): Pig[];
}