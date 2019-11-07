var readline = require("readline-sync");

function chasiki(n,otstup){
    for(let i=n; i>0; i-=2){
        for(let j=0;j<(n-i)/2+otstup;j++){
            process.stdout.write("-");
        }
        for(let j=0;j<i;j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    for(let i=3; i<=n; i+=2){
        for(let j=0;j<(n-i)/2+otstup;j++){
            process.stdout.write("-");
        }
        for(let j=0;j<i;j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }

}


var n = parseInt(readline.question("n= "));

for(let i=n; i>=1; i-=2){
    chasiki(i,(n-i)/2);
}
for(let i=3; i<=n; i+=2){
    chasiki(i,(n-i)/2);
}