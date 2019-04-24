var readline = require("readline-sync");
var x = parseInt(readline.question("x = : "));//конечное число
var strt = 0;
var fktr = 1;
while (strt!=x){
    strt=strt+1;
    fktr=fktr*strt;
}
console.log("Равно:"+fktr+".");
