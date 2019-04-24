var readline = require("readline-sync");
var sum = 0;
var x = parseInt(readline.question("x = : "));
while (x!=0){
    var m = (x%10);
    x = Math.floor (x/10);
    sum = sum + m;
}
console.log("sum = "+sum+".");