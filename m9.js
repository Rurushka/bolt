var readline = require("readline-sync");
var n = parseInt(readline.question("n= : "));
for (var i= 1; i<n; i++){
    process.stdout.write( i+ ",");
    
}
console.log(""+n);