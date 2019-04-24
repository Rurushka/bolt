var readline = require("readline-sync");
var n = parseInt(readline.question("n= : "));


if ((n%2)>0){
    for (i=1; i<=n; i++){

        for (j=n; j<(n-1)/2; j++){
            process.stdout.write("*");
        }



       
        process.stdout.write("*\n");
    }


}else {


}




