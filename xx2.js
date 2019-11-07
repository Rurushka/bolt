var readline = require("readline-sync");

let n = parseInt(readline.question("n= "));
let counter = 0;

for(let i=100; i<=999; i++){
    let k=i;
    let m=0;
    for(let j=0;j<3;j++){
        let s = k%10;
        k = Math.floor(k/10);
        m = m+s;
    }
    if (m==n){
        console.log(i);
        counter++;
    }         
}
console.log(counter+".");