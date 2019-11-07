const readline = require("readline-sync");
const arrays = require("./arrays");

let n = parseInt(readline.question("n= "));

console.log(arrays.mass_key(n));

let a = parseInt(readline.question("start= "));
let b = parseInt(readline.question("end= "));

let arr = arrays.mass_rand(n,a,b);

console.log(arr);

arrays.mass_print(arr);

let x = parseInt(readline.question("x= "));
console.log(arrays.mass_find(arr, x));

console.log("*****");

arr = arrays.mass_rand(10, -20, -5);

console.log(arrays.mass_max(arr));
console.log(arrays.mass_min(arr));

console.log("*****");

let m = parseInt(readline.question("m= "));//1 - возрастание, 0 - убывание
console.log(arrays.mass_sort(arr, m));