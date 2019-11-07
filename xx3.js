var readline = require("readline-sync");

/*let s = 0;
for(i=25; i<=55;i++){
    let k =i;
    s = s +(k*k*k);
}
console.log(s);*/


var n = 123;
var s; 

let k = n;

  for (let i=0;i<3;i++){
      s= k%10;
      k = Math.floor(k/10);
      console.log(s); 
  }
  

