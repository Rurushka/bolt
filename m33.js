var readline = require("readline-sync");

function factorial(x){
    var result=1;
    var a = 1;//значение 1
    var b = 1;//значение 2

    for (var i=3; i<=x; i++){

        a=b;
        b=result;
    
        result=a+b;
    }
    return result;
}

var n = parseInt(readline.question("n= "));//номер числа феб

console.log("Число Феб:"+factorial(n)+".");