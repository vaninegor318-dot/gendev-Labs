// Звичайна функція для числа (скалярний тип)
const inc = (n) => n + 1;

const val = 10;
const updatedVal = inc(val);
console.dir({ val, updatedVal });


// Функція для об'єкта (передача за посиланням)
const incObj = (obj) => {
  obj.n += 1;
};

const myBox = { n: 10 };
incObj(myBox);
console.dir(myBox);


// Довгий і різноманітний масив для другої частини завдання
const elements = [42, 'Kyiv', false, 3.14, 'JS', true, -7, 'code', null, 100, 'dev', false];

// Початкова колекція порожня — жодних заздалегідь заповнених ключів
const stats = {};

// Динамічне додавання ключів у циклі
for (const item of elements) {
  const type = typeof item;
  
  if (stats[type]) {
    stats[type] += 1;
  } else {
    stats[type] = 1;
  }
}

console.dir(stats);