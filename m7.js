var readline = require("readline-sync");
var n = parseInt(readline.question("n= : "));
for (var i= 0; i<n; i++){
    
    for (var j= (n-1); j>0; j--) {
        process.stdout.write("*");
    }
    process.stdout.write("*\n");
}

