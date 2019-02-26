'use strict';


let arr = [['112233445566', '223344556677', '334455667788', '334455667788', '334455667788']];

console.time('apply');
for (let i = 0; i < 20000; i++) {
  let rs = Array.prototype.concat.apply([], arr);
}
console.timeEnd('apply');