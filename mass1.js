const readline = require("readline-sync");

let n = parseInt(readline.question("n = "));
let arr = [];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.floor(Math.random()*(10-1+1)+1)));
}
console.log("Результат:");
for(let i=0; i<n; i++){
    console.log(i+"."+arr[i]);
}
let m = parseInt(readline.question("m = "));
let k = 0;
for(let i=0; i<n; i++){
    if (arr[i]==m){
        console.log(i);
        break;
    }  
    if(arr[i]!=m){
        k++;
        if(k==n){
            console.log("Нет совпадений.");   
        }
    }  
}