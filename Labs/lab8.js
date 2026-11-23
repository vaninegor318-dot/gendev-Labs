// ЗАВДАННЯ 1. Функція iterate()

function iterate(object, callback) {

    if (object === null || typeof object !== 'object') {
        throw new TypeError('Потрібно передати об’єкт');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('Callback повинен бути функцією');
    }

    for (const key of Object.keys(object)) {

        callback(key, object[key], object);
    }
}

const obj = { a: 1, b: 2, c: 3 };

console.log('Завдання 1:');

iterate(obj, (key, value) => {
    console.log({ key, value });
});


// ЗАВДАННЯ 2. Функція store()

function store(value) {

    return function () {

        return value;
    };
}

const read = store(5);

const storedValue = read();

console.log('Завдання 2:', storedValue); // 5

// ЗАВДАННЯ 3. Функція contract()

function isType(value, Type) {

    if (Type === Number) {
        return typeof value === 'number';
    }

    if (Type === String) {
        return typeof value === 'string';
    }

    if (Type === Boolean) {
        return typeof value === 'boolean';
    }

    if (Type === Array) {
        return Array.isArray(value);
    }

    if (Type === Object) {
        return value !== null && typeof value === 'object';
    }

    if (Type === Function) {
        return typeof value === 'function';
    }

    return value instanceof Type;
}

function contract(fn, ...types) {

    if (typeof fn !== 'function') {
        throw new TypeError('Перший аргумент повинен бути функцією');
    }

    if (types.length === 0) {
        throw new TypeError('Не вказано тип результату');
    }

    const returnType = types[types.length - 1];

    const argumentTypes = types.slice(0, -1);

    return function (...args) {

        if (args.length !== argumentTypes.length) {
    throw new TypeError('Неправильна кількість аргументів');
}
        for (let i = 0; i < argumentTypes.length; i++) {

            if (!isType(args[i], argumentTypes[i])) {
                throw new TypeError(
                    `Аргумент ${i + 1} має неправильний тип`
                );
            }
        }

        const result = fn.apply(this, args);

        if (!isType(result, returnType)) {
            throw new TypeError('Функція повернула неправильний тип');
        }

        return result;
    };
}

const add = (a, b) => a + b;

const addNumbers = contract(add, Number, Number, Number);

const sum = addNumbers(2, 3);

console.log('Завдання 3:', sum); // 5

const concat = (s1, s2) => s1 + s2;

const concatStrings = contract(concat, String, String, String);

const text = concatStrings('Hello ', 'world!');

console.log('Додаткова перевірка:', text);

try {
    addNumbers(2, '3');
} catch (error) {
    console.log('Помилка:', error.message);
}