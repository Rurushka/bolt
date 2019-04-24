var readline = require("readline-sync");
var x = parseInt(readline.question("x = : "));//порядковый номер числа феб-и.
var feb1 = 1;
var feb2 = 1;
var feb3 = 1;
var cycle = 2;

while (cycle < x){
    
    feb3 = feb2+feb1;
    
    feb1 = feb2;
    feb2 = feb3;

    cycle = cycle +1;
}

console.log("Результат:\nЧисло:"+feb3+".");

