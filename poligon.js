var readline = require("readline-sync");
var a = parseInt(readline.question("a = : "));
var b = parseInt(readline.question("b = : "));
var c;
var x = a+b*2
console.log("a+b*2 = "+x+"");
console.log("Teper pomenyaem ih mestami : ");
c=a;
a=b;
b=c;
console.log("a = : "+a+"\nb = : "+b+"");
var x = a+b*2;
console.log("a+b*2 = "+x+"");