// Завдання 1
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
console.log(random(5, 20));
console.log(random(100, 200));
// Завдання 2
function generateKey(length, characters) {
    let key = "";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length);
        key += characters[index];
    }

    return key;
}

console.log(generateKey(8, "abcdefghijklmnopqrstuvwxyz0123456789"));
// Завдання 3
function ipToNumber(ip) {
    const parts = ip.split(".").map(Number);

    return parts.reduce((result, part, index) => {
        return result + (part << (24 - index * 8));
    }, 0);
}

console.log(ipToNumber("10.0.0.1"));
console.log(ipToNumber("127.0.0.1"));
console.log(ipToNumber("192.168.1.1"));
// Завдання 4
const iface = {
    m1: x => [x],

    m2: function (x, y) {
        return [x, y];
    },

    m3(x, y, z) {
        return [x, y, z];
    }
};

const result = [];

for (const key of Object.keys(iface)) {
    if (typeof iface[key] === "function") {
        result.push([key, iface[key].length]);
    }
}

console.log(JSON.stringify(result));