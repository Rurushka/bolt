var readline = require("readline-sync");
var random = parseInt(Math.floor(Math.random()*(100-1+1)+1));
var cycle = 1;
var x = parseInt(readline.question("x= : "));
console.log(random);
while (x!=random) {
   if(cycle<=7) { 
       if (x>random) {
        console.log("Холодно. Число меньше.");
        } else if (x<random) {
        console.log("Холодно. Число больше.");
        } 
   } else {
       break;
   }

    x = parseInt(readline.question("x= : "));
    cycle = cycle + 1;
}
if (cycle<=7){
    console.log("Ответ верный.\nX = "+random+".\nЧисло попыток:"+cycle+".");
} else {
    console.log("Вы проиграли.");
}

