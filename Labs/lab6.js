// ЗАВДАННЯ 1. PIPE — композиція зліва направо

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

function pipe(...fns) {

    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('Усі аргументи повинні бути функціями');
    }

    return function (value) {

        return fns.reduce((result, fn) => fn(result), value);
    };
}

const pipeResult = pipe(inc, twice, cube);

console.log('Завдання 1:', pipeResult(5)); // 1728

const pipeTest = pipe(inc, inc);

console.log('Додаткова перевірка:', pipeTest(7)); // 9

try {
    pipe(inc, 7, cube);
} catch (error) {
    console.log('Помилка:', error.message);
}

// ЗАВДАННЯ 2. COMPOSE — композиція справа наліво

const EventEmitter = require('events');

function compose(...fns) {

    if (!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError('Усі аргументи повинні бути функціями');
    }

    const emitter = new EventEmitter();


    function composed(...args) {

        let result = args;

        try {

            for (let i = fns.length - 1; i >= 0; i--) {

                result = [fns[i](...result)];
            }

            return result[0];

        } catch (error) {

            if (emitter.listenerCount('error') > 0) {
                emitter.emit('error', error);
            }

            return undefined;
        }
    }

    composed.on = function (event, callback) {
        emitter.on(event, callback);
        return composed;
    };

    return composed;
}
const composeResult = compose(inc, twice, cube);

console.log('Завдання 2:', composeResult(2)); // 17

const errorFunction = x => {
    throw new Error('Сталася помилка!');
};

const errorComposeResult = compose(inc, errorFunction, cube);

errorComposeResult.on('error', error => {
    console.log('Помилка:', error.message);
});

console.log('Результат після помилки:', errorComposeResult(2)); // undefined