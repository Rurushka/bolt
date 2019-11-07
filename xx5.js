var readline = require("readline-sync");

for(i=10; i<100; i++){
    let k = i;
    let x = k%10;
    let s = Math.floor(k/10);
    if((x+s)+(x+s)*(x+s)==k){
        console.log(k);
    }
}