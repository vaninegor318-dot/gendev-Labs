let X = Number(process.argv[2]);
let Y;
let found = false;
if (X > -15) {
    if (X <= 3) {
        Y = 4 * X ** 2 + 2;
        found = true;
    }
} else {
    if (X <= -30) {
        Y = 3 * X ** 3 / 4 - 5;
        found = true;
    }
} 
if (X > 20) {
    Y = 3 * X ** 3 / 4 - 5;
    found = true;
}   
if (found) {
    console.log("Y =", Y);
} else {
    console.log("Функція не існує");
}      