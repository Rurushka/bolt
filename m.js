var readline = require("readline-sync");
var a = parseInt(readline.question("a= : "));
if (a%2==0){
    console.log ("Число четное.");
} else {
    console.log ("Число нечетное");
}