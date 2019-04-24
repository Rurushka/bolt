var readline = require("readline-sync");
var x = parseInt(readline.question("x = : "));//порядковый номер числа феб-и.
var feb1 = 1;
var feb2 = 1;
var feb3 = 1;

for (i=2; i<x; i++){

    feb3 = feb1+feb2;

    feb1 = feb2;
    feb2 = feb3;

}
console.log("Результат:\nЧисло:"+feb3+".");