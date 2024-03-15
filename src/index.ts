
import { Rectangle } from './rectangle';
import { Circle } from './circle';
import { Triangle } from './triangle';

const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);
const triangle = new Triangle(3, 4, 5);


console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());
rectangle.print();

console.log("Circle Area:", circle.area());
console.log("Circle Perimeter:", circle.perimeter());
circle.print();

console.log("Triangle Area:", triangle.area());
console.log("Triangle Perimeter:", triangle.perimeter());
triangle.print();