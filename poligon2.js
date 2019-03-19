var readline = require("readline-sync");
var a = 11;
var b = 34;
var c = readline.question("login: ");
var d = readline.question("password: ");
if (c==a && d==b) {
    console.log("Добро пожаловать");
} else if (c==a || d==b) {
    console.log("Повторите");
} else {
    console.log("Пока")
}
