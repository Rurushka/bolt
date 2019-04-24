var readline = require("readline-sync");
var n;
do { 
    n = parseInt(readline.question("n= : "));

} while((n%2)==0);

for (j=n; j>1; j-=2){
    for (k=((n-j)/2); k<(n-j); k++){
        process.stdout.write("-");
    }    
    for (i=j; i>0; i--){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

for (j=1; j<=n; j+=2){
    for (k=((n-j)/2); k>0; k--){
        process.stdout.write("-");
    }    
    for (i=0; i<j; i++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
