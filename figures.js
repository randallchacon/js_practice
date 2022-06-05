console.log("Hello world");

console.group("Squares");

const squareSide = 5;
console.log("The square side are: " + squareSide + " cm.");

const squarePerimeter = squareSide * 4;
console.log("Square perimeter: " + squarePerimeter + " cm.");

const squareArea = squareSide * squareSide;
console.log("Square area: " + squareArea + " cm2");

console.groupEnd();

console.group("Triangles");
//Triangle
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1+triangleSide2+triangleBase;

console.log(
    "The sides of the triangle measure: " + triangleSide1 +
    "cm, " + triangleSide2 + "cm, " + triangleBase + "cm."
);

console.log("Triangle height: " + triangleHeight);
console.log("Triangle perimeter: " + trianglePerimeter);
console.log("Triangle area: " + (triangleBase*triangleHeight) / 2);

console.groupEnd();

//Circle
console.group("Circle");
const radius = 4;
const diameter = radius*2;
const pi = Math.PI;
const circunference = diameter*pi;
const circleArea = (radius*radius)*pi;

console.log("Radious circle: " +radius + " cm.");
console.log("Diameter: " + diameter + " cm.");
console.log("pi: " +pi);
console.log("Circunference: " +circunference + " cm.");
console.log("Circle area" + circleArea + " cm.");

console.groupEnd();