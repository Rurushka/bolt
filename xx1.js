var readline = require("readline-sync");

let s = 0;
let n = parseInt(readline.question("n = "));

for(i=1; i<=(2*n)-1; i+=2) {
    s = s + i;
}
console.log(s+".");