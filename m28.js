var readline = require("readline-sync");
var x = parseInt(readline.question("x = : "));//конечное число
var fktrl = 1;
for (var i=1; i<=x; i++){
    fktrl = fktrl*i;
}
console.log("Результат:"+fktrl+".");