function seq(...funcs) {
    return function next(value) {

        if (typeof value === "function") {
            return seq(...funcs, value);
        }

        return funcs.reduceRight(
            (result, fn) => fn(result),
            value
        );
    };
}

// Перевірка роботи

console.log(
    seq(x => x + 7)
       (x => x * 2)
       (5)
); // 17

console.log(
    seq(x => x * 2)
       (x => x + 7)
       (5)
); // 24

console.log(
    seq(x => x + 1)
       (x => x * 2)
       (x => x / 3)
       (x => x - 4)
       (7)
); // 3

// Завдання 2
function array() {
    const items = [];

    function get(index) {
        return items[index];
    }

    get.push = function(value) {
        items.push(value);
    };

    get.pop = function() {
        return items.pop();
    };

    return get;
}

// Перевірка роботи

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());