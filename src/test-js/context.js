/* eslint-disable */
String.prototype.givePizza = () => {
  return "Just give pizza!";
};

console.log("".givePizza()); // ??

/* eslint-disable */
String.prototype.givePizza = function () {
  return this + ", Just give pizza!";
};

const name = "Mau";

console.log(name.givePizza()); // ??

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter()); // ??
console.log(shape.perimeter()); // ??
