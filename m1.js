var readline = require("readline-sync");
var a = parseInt(readline.question("a = : "));
var b = parseInt(readline.question("b = : "));
var c = parseInt(readline.question("c = : "));

if (c >= b) {
if (c == b){
console.log("c=b");
} else {
 console.log("c>b");
}
} else if (c<=a){
if (c==a) {
console.log("c=a");
} else {
console.log("c<a");
}
} else {
console.log ("a<c>b");
}