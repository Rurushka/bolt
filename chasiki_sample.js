
const readline = require('readline-sync');

function draw_line(stars, spaces) {
    for (let i = 0; i < spaces; i++) {
        process.stdout.write("-");
    }
    for (let i = 0; i < stars; i++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

function draw_clock(n, additional) {
    let spaces = 0;

    for (let i = n; i >= 1; i-=2) {
        draw_line(i, spaces + additional);
        spaces++;
    }
    spaces -= 2;
    for (let i = 3; i <= n; i+=2) {
        draw_line(i, spaces + additional);
        spaces--;
    }
}

let n = parseInt(readline.question("Please, enter some number: "));

let spaces = 0;

for (let i = n; i >= 1; i-=2) {
    draw_clock(i, spaces);
    spaces++;
}
spaces -= 2;
for (let i = 3; i <= n; i+=2) {
    draw_clock(i, spaces);
    spaces--;
}
