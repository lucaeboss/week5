import { Shape } from './shape';
import { Printable } from './printable';
export class Circle extends Shape implements Printable {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    print() {
        console.log("Printing Circle...");
        this.logDetails();
    }
}