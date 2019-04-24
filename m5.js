var readline = require("readline-sync");

var b = parseInt(readline.question("b = : "));
var c = parseInt(readline.question("c = : "));

if (b==0) {
    console.log("Измените  b.");
} else {
    var x = - c / b;
    console.log(" x = "+x+"");
}