const numbers = [5,21,14,51,17,22]
let sum = 0
numbers.map(item => sum += item)
console.log(sum);
let sum2 = 0
numbers.map((item, index) => sum2 += index)

console.log(sum2);
console.log(sum-sum2);

let mult = 1
let mult2 = 1
numbers.map(item => mult *= item)
console.log(mult);

numbers.map((item, index) => mult2 *= index)
console.log(mult2);

console.log(mult-mult2);