// Spread vs Rest Operator (ES6)
// Spread phailaata hai
// Rest ikattha karta hai

// SPREAD OPERATOR ...

//  Array / Object ke andar ki cheezen bahar nikaal deta hai

const a = [1, 2, 3];
console.log(...a);

// Array copy
const b = [10, 20];
const c = [...b];

// Array merge

const d = [1, 2];
const e = [3, 4];

const f = [...d, ...e];

// Value add karna

const arr = [2, 3];
const newArr = [1, ...arr, 4];

// Object ke sath

const user = { name: "Ali", age: 20 };

const newUser = {
  ...user,
  city: "Lahore"
};

// Function call me (Arguments pass)

function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(sum(...nums));

// REST OPERATOR ...

// Multiple values ko ek array/object me jama karta hai

// Function parameters me

function test(...args) {
  console.log(args);
}

test(10, 20, 30);

// Fixed + Rest

function demo(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

demo(1, 2, 3, 4, 5);

// Array destructuring

const arr2 = [10, 20, 30, 40];

const [m, n, ...rest] = arr2;

// Object destructuring

const student = {
  name: "Kabeer",
  age: 22,
  course: "JS"
};

const { name, ...others } = student;


// Assignment ke RIGHT → Spread
// Assignment ke LEFT → Rest

// const newArr = [...oldArr];   // SPREAD
// const [a, ...b] = arr;       // REST
