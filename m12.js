var readline = require("readline-sync");
var n = parseInt(readline.question("n= : "));


for (j=1; j<=n; j+=2){
    for (k=((j-1)/2); k<n; k++){
        process.stdout.write("-");
    }
        //k - пробел
       // var k = ((n-j)/2)
        //process.stdout.write(" ");
    
    for (i=0; i<j; i++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}