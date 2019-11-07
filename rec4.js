var readline = require("readline-sync");

function rec(n){
    let k = n;
    if(k!=0){
        rec(Math.floor(k/10));
        process.stdout.write(((k%10+1)%10 + ""));
    }
    
}

var n = 891;

rec(n);