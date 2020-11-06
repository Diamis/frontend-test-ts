// https://learn.javascript.ru/closure
// -----------------------------------

function makeCounter() {
  let count = 1;
  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.clear();
console.group("closure");
console.log("1. counter()", counter()); // ?
console.log("2. counter()", counter()); // ?
console.log("3. counter()", counter()); // ?

console.log("1. makeCounter()", makeCounter()()); // ?
console.log("2. makeCounter()", makeCounter()()); // ?
console.log("3. makeCounter()", makeCounter()()); // ?
console.groupEnd();
