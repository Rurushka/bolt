var readline = require("readline-sync");

var x1 = parseInt(readline.question("x1 = : "));
var x2 = parseInt(readline.question("x2 = : "));
var y1 = parseInt(readline.question("y1 = : "));
var y2 = parseInt(readline.question("y2 = : "));
// x1x2 - одна сторона прямоугольника.
// y1y2 - другая сторона прямоугольника.
var x3 = parseInt(readline.question("x3 = :"));
var y3 = parseInt(readline.question("y3 = :"));
//x3y3 - координаты точки в плоскости.
if (x1<=x3 && x3<=x2 && y1<=y3 && y3<=y2) {
    console.log("Точка на прямоугольнике.");
} else {
    console.log("Точка за пределами прямоугольника.");
}