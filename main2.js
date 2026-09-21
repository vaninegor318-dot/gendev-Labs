let X = Number(process.argv[2]);
let y;
if (X > -15 && X <= 3) {
     y = 4 * X ** 2 + 2;
    console.log("Y =", y);
} else if (X <= -30 || X > 20) {
     y = 3 * X ** 3 / 4 - 5;
    console.log("Y =", y);
} else {
    console.log("Функція не існує");
}