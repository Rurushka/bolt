var readline = require("readline-sync");

var a = parseInt(readline.question("vvedite a: "));
var b = parseInt(readline.question("vvedite b: "));
var c = parseInt(readline.question("vvedite c: "));
var d = parseInt(readline.question("vvedite d: "));

var x = (a+b)/(c+d);

console.log("(a+b)/(c+d) ="+x+" ");