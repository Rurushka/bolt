const readline = require("readline-sync");

var x =  parseInt(readline.question("x = "));
var arr = [];
var s = 0;
for (let i=0; i<x; i++){
    arr.push(parseInt(readline.question("m = ")));
    
}
console.log(arr);
for (let i=0; i<x; i++){
    console.log(i+"."+arr[i]);
    s += arr[i];
}
console.log(s);

