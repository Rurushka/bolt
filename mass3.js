const readline = require("readline-sync");

let arr = [];
let x = parseInt(readline.question("x= "));
for(let i=0; i<x;i++){
    arr.push(parseInt(readline.question("n= ")));
}

console.log(arr);
let flag = true;
let flag1 = false;

for (let i=0; i<x; i++){
    if(arr[i]==2){
        flag1=true;
        break;
    }
    if(arr[i]!=5){
        flag=false;
    }
}
if (flag){
    console.log("Отличник.");
}else if(flag1){
    console.log("Двоечник.");
}else{
    console.log("Пытался."); 
}
