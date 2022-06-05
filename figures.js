console.log("Hello world");

//SQUARE---------------------------
console.group("Squares");

const squareSide = 5;
console.log("The square side are: " + squareSide + " cm.");

// const squarePerimeter = squareSide * 4;
// console.log("Square perimeter: " + squarePerimeter + " cm.");

// const squareArea = squareSide * squareSide;
// console.log("Square area: " + squareArea + " cm2");

console.groupEnd();

//TRIANGLE--------------------------
console.group("Triangles");
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
const triangleHeight = 5.5;
// const trianglePerimeter = triangleSide1+triangleSide2+triangleBase;

// console.log(
//     "The sides of the triangle measure: " + triangleSide1 +
//     "cm, " + triangleSide2 + "cm, " + triangleBase + "cm."
// );

console.log("Triangle height: " + triangleHeight);
console.log("Triangle perimeter: " + trianglePerimeter(6,6,4));
console.log("Triangle area: " + triangleArea(4, triangleHeight));

console.groupEnd();

//CIRCLE-----------------------------
console.group("Circle");
// const radius = 4;
// const diameter = radius*2;
const pi = Math.PI;
// const circunference = diameter*pi;
// const circleArea = (radius*radius)*pi;

//console.log("Radious circle: " +radius + " cm.");
//console.log("Diameter: " + diameter + " cm.");
//console.log("pi: " +pi);
//console.log("Circunference: " +circunference + " cm.");
//console.log("Circle area" + circleArea + " cm.");

console.groupEnd();
//SQUARE
function squarePerimeter(side){
    return side*4;
}
function squareArea(side){
    return side*side;
}
//TRIANGLE
function trianglePerimeter(s1, s2, base){
    return s1+s2+base;
}
function triangleArea(base, height){
    return (base*height)/2;
}
//CIRCLE
function diameterCircle(r){
    return r*2;
}
function perimeterCircle(r){
    return diameterCircle(r)*pi;
}
function areaCircle(r){
    return (r*r)*pi;
}

const input = document.getElementById("txtSquare");

function calculateSquarePerimeter(){
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter)
}

function calculateSquareArea(){
    const value = input.value;
    const area = squareArea(value);
    alert(area)
}