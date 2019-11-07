const readline = require("readline-sync");

let n = parseInt(readline.question("n = "));
let arr = [];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.floor(Math.random()*(10-1+1)+1)));
}
console.log(arr);
for (let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        if((arr[j]%2)!=0){
            let c = arr[j];
            arr[j] = arr[i];
            arr[i] = c;
        }
    }
}
console.log(arr);