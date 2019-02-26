'use strict';


let arr = [['112233445566', '223344556677', '334455667788', '334455667788', '334455667788']];

console.time('reduce');
for (let i = 0; i < 20000; i++) {
  let rs = arr.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
}
console.timeEnd('reduce');