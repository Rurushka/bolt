const readline = require("readline-sync");
let n = parseInt(readline.question("n = "));
let arr = [];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.floor(Math.random()*(100-1+1)+1)));
}
for (let i=0; i<arr.length; i++){
    let q =i;
    for(let j=i; j<arr.length; j++){
       if (arr[j]<arr[q]){
           q = j;
       }
    }
    let c = arr[q];
    arr[q]=arr[i];
    arr[i]=c; 
}
console.log(arr);
let x = parseInt(readline.question("x=: ")); //что ищем
let s = parseInt(Math.floor(arr.length/2));
let y = 0;
let q = s++;

while (arr[s] != x && s>=y && s<=n){
    if (q == s){
        console.log("Соответствий не найдено.");
        break;
    }
    q = s;
    if (arr[s]>x){
        n = s;
    } else /*if (arr[s]<x)*/{
        y = s;
    }
    s = parseInt(Math.floor((n+y)/2));
    
}
if(arr[s]==x){
    console.log(s);
}