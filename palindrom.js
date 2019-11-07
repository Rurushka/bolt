const readline = require("readline-sync");

let n = readline.question("n= ");
let s = Math.floor(n.length/2);
let m = true;

for (let i=0; i<s; i++){
    if (n[i] == n[n.length-i]){
        m = true;
    } else {
        m = false;
        break;
    }
}

if(m){
    console.log("палиндром");
}
