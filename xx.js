var readline = require("readline-sync");

let s = 0;
let n = parseInt(readline.question("n = "));

for (let i=10; i<=99; i++){
    if (i%n==0){
        console.log(i+".");
        s = s+1;
    }

}
console.log(s+"");