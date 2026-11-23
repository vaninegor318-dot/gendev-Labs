// Завдання 1. Видалення одного елемента

function removeElement(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];

removeElement(array1, 5);

console.log("Завдання 1:", array1);

// Завдання 2. Видалення декількох елементів

function removeElements(array, ...items) {
    for (const item of items) {
        removeElement(array, item);
    }
}

const array2 = [1, 2, 3, 4, 5, 6, 7];

removeElements(array2, 5, 1, 6);

console.log("Завдання 2:", array2);

// Завдання 3. Видалення повторюваних елементів

function unique(array) {
    return [...new Set(array)];
}

const result1 = unique([2, 1, 1, 3, 2]);

console.log("Завдання 3:", result1);

const result2 = unique(['top', 'bottom', 'top', 'left']);

console.log("Завдання 3:", result2);


// Завдання 4. Різниця між двома масивами

function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

const firstArray = [7, -2, 10, 5, 0];
const secondArray = [0, 10];

const result3 = difference(firstArray, secondArray);

console.log("Завдання 4:", result3);

const cities1 = ['Beijing', 'Kiev'];
const cities2 = ['Kiev', 'London', 'Baghdad'];

const result4 = difference(cities1, cities2);

console.log("Завдання 4:", result4);