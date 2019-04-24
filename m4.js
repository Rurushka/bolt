var readline = require("readline-sync");
var a = parseInt(readline.question("a = : "));
var b = parseInt(readline.question("b = : "));
var c = parseInt(readline.question("c = : "));
var D =b*b - 4 * a * c;
if (D==0) {
    var x = (-b)/(2 * a);
    console.log("x = "+x+"");
} else if (D<0) {
    console.log("Корней нет.");
} else {
    var x1 = (-b-Math.sqrt(D))/(2 * a);
    var x2 = (-b+Math.sqrt(D))/(2 * a);
    console.log("x1 = "+x1+" \nx2 = "+x2+"");
}
