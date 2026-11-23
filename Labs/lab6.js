// Завдання 1
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


const f = pipe(inc, twice, cube);

console.log(f(5)); // 1728


const g = pipe(inc, inc);

console.log(g(7)); // 9


try {
    const h = pipe(inc, 7, cube);
} catch (error) {
    console.log(error.message);
}

// Завдання 2

const EventEmitter = require('events');

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

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

const f = compose(inc, twice, cube);

console.log(f(2)); // 17

const errorFunction = x => {
    throw new Error('Сталася помилка!');
};

const g = compose(inc, errorFunction, cube);

g.on('error', error => {
    console.log('Помилка:', error.message);
});

console.log(g(2)); // undefined