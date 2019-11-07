const readline = require("readline-sync");

let n = parseInt(readline.question("n = "));
let arr = [];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.floor(Math.random()*(10-1+1)+1)));
}

console.log(arr);

for (let i=1; i<arr.length; i++){
    let q = i;
    while(q>0 && arr[q-1] > arr[q]){
        let h= arr[q-1];
        arr[q-1]= arr[q];
        arr[q]=h;
        q--; 
    }
}
console.log(arr);