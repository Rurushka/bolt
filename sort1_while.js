const readline = require("readline-sync");

let n = parseInt(readline.question("n = "));
let arr = [];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.floor(Math.random()*(10-1+1)+1)));
}
console.log(arr);
let m = true;
let s =0;

while(m){
    m = false;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            let c;
            c = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = c;
            m=true;
        }
    }
    s++;
}
console.log(arr);
console.log(s);