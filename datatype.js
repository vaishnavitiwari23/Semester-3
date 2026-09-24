let a = 10;
let b = "10";
console.log(a == b); // true (loose equality, type coercion)
console.log(a === b); // false (strict equality, no type coercion)
console.log(a + 5); // 15 (number addition)
console.log(a > 5 && a < 10);

let mark = 85;
if (marks >= 90) {
  consol.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let num = 0;
while (num <= 10) {
  console.log(num);
  num += 2;
}

function add(x, y) {
  return x + y;
}
console.log(add(5, 10)); // 15
const multiply = function (x, y) {
  return x * y;
};

const greet = (name) => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Bob")); // 15

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(doubled);
console.log(evens);
console.log(sum);

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Button clicked!";
});
