var readline = require("readline-sync");
//Трехмерное пространство в котором существуют шар и некая точка.
var x1 = parseInt(readline.question("x1 = : "));
var y1 = parseInt(readline.question("y1 = : "));
var z1 = parseInt(readline.question("z1 = : "));
//x1y1z1 - координаты центра шара в пространстве.
var R = parseInt(readline.question("R = : "));
//R = радиус шара.
var x2 = parseInt(readline.question("x2 = : "));
var y2 = parseInt(readline.question("y2 = : "));
var z2 = parseInt(readline.question("z2 = : "));
//x2y2z2 - координаты точки в пространстве.

var a = Math.abs(x1 - x2);
var b = Math.abs(y1 - y2);
var c = Math.abs(z1 - z2);
//где а, расстояние от точки х1 до точки х2.
//b, те же данные для координат y.
//с, для координат z.

console.log("a = : "+a+" \nb = : "+b+" \nc = : "+c+"");

if (0<=a && a<=R && 0<=b && b<=R && 0<=c && c<=R) {
    console.log("Точка не выходит за границы шара.");
} else {
    console.log("Точка за границами шара.");
}
