var readline = require("readline-sync");

function factorial(x){
    var result=1;
    for (var i=1; i<=x; i++){
        result*=i;
    }
    return result;
}

var n = parseInt(readline.question("n= "));
console.log(factorial(n)+".");
