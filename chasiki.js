var readline = require("readline-sync");

function chasiki(n, m){
    //m - доп пробел
    for (m=(n-m); m<=n; m++){
        process.stdout.write("-");
    }
    for (j=n; j>1; j-=2){
        for (k=((n-j)/2); k<(n-j); k++){
            process.stdout.write("-");
        }
        for (i=j; i>0; i--){
            process.stdout.write("*");
        }
        process.stdout.write("\n"); 
    }

    // for (s=0; s<=(n-j)/2; s++){
    //     process.stdout.write("-");
    // }

    for (j=1; j<=n; j+=2){
        for (k=((n-j)/2); k>0; k--){
            process.stdout.write("-");
        }    
        for (i=0; i<j; i++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    
}

var n;
var m = n;


do { 
    n = parseInt(readline.question("n= : "));

} while((n%2)==0);



do{
    chasiki(n, m);
    n = n-2;
}while(n>0);