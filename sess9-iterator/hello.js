let arr = ['edmond', 'edward', 'evan'];

for (let item of arr) {
    console.log(item);
}

let it = arr[Symbol.iterator]();
it.next();
it.next();
it.next();
it.next();

let mpa = new Map();
mpa.set('a', 'a'.charCodeAt(0));
mpa.set('b', 'b'.charCodeAt(0));
mpa.set('c', 'd'.charCodeAt(0));
mpa.set('c', 'd'.charCodeAt(0));

for (let item of mpa) {
    console.log(item);
}

let seta = new Set();
seta.add(NaN);
seta.add(undefined);
seta.add(null);
seta.add(NaN);
seta.add(undefined);
seta.add(null);
for (let item of seta) {
    console.log(item);
}