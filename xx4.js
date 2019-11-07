var readline = require("readline-sync");

let count = 0;
for(i=10;i<100;i++){
    let k = i;
    let x = k%10;
    let s = Math.floor(k/10);
    
    if((x+s)%13==0){
        count++;
    }
}
console.log(count);