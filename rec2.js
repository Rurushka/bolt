var readline = require("readline-sync");

function reverse(n){
    let k = n;
  for (let i=0;i<3;i++){
      s= k%10;
      k = Math.floor(k/10); 
      console.log(s);
  }
  
}

var n = 123;
var s;

reverse(n);