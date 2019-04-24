var readline = require("readline-sync");
var n = parseInt(readline.question("n = : "));
for (var i=0;i<n;i++){
    for (var j=0;j<n;j++){
        if ((i+1)>j){
            process.stdout.write("*");
        } else {
            process.stdout.write(".");
        }
    }
    process.stdout.write("\n");
}