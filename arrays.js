const readline = require("readline-sync");

function mass_key(n){
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(parseInt(readline.question("x= ")));
    }
    return arr;
}
function mass_rand(n,a,b){
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(parseInt(Math.floor(Math.random()*(b-a+a)+1)));
    }
    return arr;
}
function mass_print(arr){
    for(let i=0; i<arr.length; i++){
        console.log(i+"."+arr[i]);
    }
}
function mass_find(arr, x){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==x){
            return i;
        }
    }
    return -1;
}

function mass_max(arr){
    let q = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[q]){
            q = i;
        }
    }
    return q;
}
function mass_min(arr){
    let q = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] < arr[q]){
            q = i;
        }
    }
    return q;
}
function mass_sort(arr, m){
    for (let i=0; i<arr.length; i++){
        let q =i;
        for(let j=i; j<arr.length; j++){
            if (arr[j]<arr[q] && m == 1 || arr[j] > arr[q] && m == 0){
                q = j;
            }
        }
        let c = arr[q];
        arr[q]=arr[i];
        arr[i]=c; 
    }
  
   return arr;
}
module.exports = {
    mass_key,
    mass_rand,
    mass_print,
    mass_find,
    mass_max,
    mass_min,
    mass_sort,
}