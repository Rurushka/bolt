const readline = require("readline-sync");

let n = parseInt(readline.question("n = "));
let arr = [];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.floor(Math.random()*(10-1+1)+1)));
}

console.log(arr);

for (let i=1; i<arr.length; i++){
    let q = 0;
    while(arr[i-q]<arr[i-q-1] && q<i){
        let h= arr[i-q-1];
        arr[i-q-1]= arr[i-q];
        arr[i-q]=h;
        q++; 
    }
}
console.log(arr);