var readline = require("readline-sync");
var sum = 0;
var x = parseInt(readline.question("x = : "));
while (x!=0){
    sum = sum + x;
    x = parseInt(readline.question("x = : "));
}
console.log("sum = "+sum+".");