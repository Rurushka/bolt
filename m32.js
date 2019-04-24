var readline = require("readline-sync");

function factorial(x){
    var result=1;
    for (var i=1; i<=x; i++){
        result*=i;
    }
    return result;
}

var n = parseInt(readline.question("n= "));
var m = parseInt(readline.question("m= "));

while(n<=m){
    console.log("Значение n должно быть больше значения m.");
    var n = parseInt(readline.question("n= "));
    var m = parseInt(readline.question("m= "));
}

console.log((factorial(n)/(factorial(m)*factorial(n-m)))+".");

