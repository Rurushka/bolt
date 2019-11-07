const readline = require("readline-sync");

let n = readline.question("text= ");
let s = readline.question("simbol= ");
let m = true;

for (let i=0; i<n.length; i++){
    if(n[i] == s){
        console.log(i);
        m = false;
        break;
    }
}

if (m){
    console.log("нет");
}

