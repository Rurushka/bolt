var readline = require("readline-sync");

function reverse(n){
    let k = n;
    if (k!=0){
        console.log(k%10);
        reverse(Math.floor(k/10));
    }   
}

var n = parseInt(readline.question("n= "));

reverse(n);