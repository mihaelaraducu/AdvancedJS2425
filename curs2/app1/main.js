import { Canvas } from '../modules/Canvas.js';

import { Square } from '../modules/Square.js';
import { Circle } from '../modules/Circle.js';
import { Triangle } from '../modules/Triangle.js';

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

// draw a square
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 150, 10, 50, 'red');
square1.draw();
square1.reportArea();
square1.reportPerimeter();

// draw a circle
let circle1 = new Circle(myCanvas.ctx, myCanvas.listId, 80, 260, 130, 'yellow');
circle1.draw();
circle1.reportArea();
circle1.reportPerimeter();

// draw a triangle
let triangle1 = new Triangle(myCanvas.ctx, myCanvas.listId, 160, 320, 60, 'blue');
triangle1.draw();
triangle1.reportArea();
triangle1.reportPerimeter();

// draw a triangle
let triangle2 = new Triangle(myCanvas.ctx, myCanvas.listId, 80, 220, 220, 'aqua');
triangle2.draw();
//triangle2.reportArea();
//triangle2.reportPerimeter();

