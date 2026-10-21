// Спосіб 1. Цикл For
function sumFor() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sumFor(1, 2, 3));

// Спосіб 2. Цикл for...of
function sumForOf() {
    let result = 0;
    for (const number of Array.from(arguments)) {
        result += number
    }
    return result;
}
console.log(sumForOf(1, 2, 3));

// Спосіб 3. Цикл while
function sumWhile() {
    let result = 0;
    const numbers = Array.from(arguments);
    let i = 0;
    while (i < numbers.length) {
        result += numbers[i];
        i++;
    }
    return result;
}
console.log(sumWhile(1, 2, 3));

// Спосіб 4. Цикл do...while
function sumDoWhile() { 
    let result = 0; 
    const numbers = Array.from(arguments); 
    let i = 0;
    if (numbers.length === 0) {
    return 0;
    }
    do {
    result += numbers[i];
    i++;
    } while (i < numbers.length);
     return result;
}
console.log(sumDoWhile(1, 2, 3));

// Спосіб 5. Метод reduce()
function sumReduce() {
     const numbers = Array.from(arguments);
    return numbers.reduce((result, number) => result + number, 0);
}
console.log(sumReduce(1, 2, 3));

// Завдання 6. Найбільше число у двовимірному масиві
function max(matrix) { let largest = matrix[0][0];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > largest) {
            largest = matrix[i][j];
        }
    }
}
return largest;
}
const matrix = [ [1, 5, 3], [8, 2, 4], [6, 9, 7] ];
console.log(max(matrix));

// Завдання 7. Обчислення тривалості життя 
function ages(people) { 
    const result = {};
for (const name in people) {
    result[name] = people[name].died - people[name].born;
}
return result;
}
const people = { 
    John: { born: 1900, died: 1970 },
    Mary: { born: 1920, died: 2000 },
    Alex: { born: 1950, died: 2020 } 
};
console.log(ages(people));