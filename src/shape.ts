export abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  logDetails() {
      console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
  }
}