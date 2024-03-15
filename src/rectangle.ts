import { Shape } from './shape';
import { Printable } from './printable';

export class Rectangle extends Shape implements Printable {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }

    print() {
        console.log("Printing Rectangle...");
        this.logDetails();
    }
}