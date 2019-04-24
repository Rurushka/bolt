var readline = require("readline-sync");
var n = parseInt(readline.question("n= : "));

for (var l=n; l>1; l--){
    for (var k=0; k<l; k++){
    process.stdout.write("*");
    }
    process.stdout.write("\n")
}

for (var j=1; j<=n; j++){
    for (var i=0; i<j; i++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
