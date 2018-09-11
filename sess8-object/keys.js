let ga = {
  name: 'RX-78 GP01'
};

let myga = Object.create(ga);
myga.location = 'SH';
myga.created = Date.now();

console.log('for...in');
for (var i in myga) {
  console.log(`${i} : ${myga[i]}`);
}

console.info('Object.keys');
Object.keys(myga).forEach(function(key, index) {
    console.log(`${key} : ${myga[key]}`);
});
