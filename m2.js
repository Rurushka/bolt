var readline = require("readline-sync");

var a = parseInt(readline.question("a = : "));
var b = parseInt(readline.question("b = : "));
var c = parseInt(readline.question("c = : "));

if (c==a) {
    console.log ("c=a");
} else if (c==b){
    console.log("c==b");
} else if (c<a) {
    console.log("c<a");
} else if (c>b) {
    console.log("c>b");
} else {
    console.log ("a<c>b");
}