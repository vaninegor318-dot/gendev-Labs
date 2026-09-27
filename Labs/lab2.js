// Ідентифікатори
let myName = "Єгор";
const birthYear = 2009;
function sayHello(name) {
    console.log(`Привіт, ${name}!`);
}
// Цикли 
function range(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
function rangeOdd(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
// Функції
function average(a, b) {
    return (a + b) / 2; 
}
function average(x) {
    return x * x;
}
function average(x) {
    return x * x * x;
}
function calculate() {
    const result = [];
    for(let i = 0; i <= 9; i++) {
        const cq = square(i);
        const cb = cube(i);
        result.push(average(sq, cb));
    }
    return result;
}
// Об'єкти
function fn() {
  const objAsConst = { name: 'First' };
  let objAsLet = { name: 'Second' };
  objAsConst.name = 'New First';
  objAsLet.name = 'New Second';
  // objAsConst = { name: 'Other' }; // Викличе помилку, константу не можна перепризначити
  objAsLet = { name: 'Other' };      // Працює для let
  console.log(objAsConst, objAsLet);
}
function createUser(name, city) {
  return { name, city };
}
// Колекції
// Завдання 9: Пошук у масиві об'єктів за допомогою циклу for
const phonebookArray = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Antonin', phone: '+380445554444' }
];

function findPhoneByName(name) {
  for (const item of phonebookArray) {
    if (item.name === name) {
      return item.phone;
    }
  }
}

// Завдання 10: Пошук у хеш-таблиці (довіднику) через hash[key]
const phonebookHash = {
  'Marc': '+380445554433',
  'Anton': '+380445554444'
};

function findPhoneByNameHash(name) {
  return phonebookHash[name];
}