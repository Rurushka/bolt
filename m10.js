var readline = require("readline-sync");
var n = parseInt(readline.question("n= : "));
for (i=n; i>0; i--){
    process.stdout.write(i+"\n");
}
for (j=2; j<=n; j++){
    process.stdout.write(j+"\n");
}