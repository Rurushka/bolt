var readline = require("readline-sync");

function fib(n){
    if (n==0){
        return 1;
    } 
    return fib(n-1)*n;
}

var n = parseInt(readline.question("n= "));

console.log(fib(n));

