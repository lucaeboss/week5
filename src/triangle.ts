import { Shape } from './shape';
import { Printable } from './printable';

export class Triangle extends Shape implements Printable {
    constructor(private side1: number, private side2: number, private side3: number) {
        super();
    }

    area(): number {
        // Using Heron's formula for the area of a triangle
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }

    perimeter(): number {
        return this.side1 + this.side2 + this.side3;
    }

    print() {
        console.log("Printing Triangle...");
        this.logDetails();
    }
}