console.clear();
// 1. в чем отличие оператора сравнения == / ===

const objA = { test: true };
const objB = { test: true };
const objC = objA;

console.log("objA === objB:", objA === objB);
console.log("objA === objC:", objA === objC);
