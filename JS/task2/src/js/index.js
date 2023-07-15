// Task 1

let a = 2;
let b = 3;
let temp = a;
a = b;
b = temp;

console.log(a, b);

// Task 2

let c = 2;
let d = 3;

[c, d] = [d, c];
console.log(c, d);

// V2
let k = 2;
let q = 3;

k = k + q;
q = k - q;
k = k - q;

console.log(k);
console.log(q);
