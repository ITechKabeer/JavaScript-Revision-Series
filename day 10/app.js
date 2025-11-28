// Normal function
function greet(name) {
    return "Hello " + name;
}

// Arrow function
const greet = name => "Hello " + name;

console.log(greet("Kabeer")); // Hello Kabeer

// Agar single parameter ho → parentheses optional.
// Agar 0 ya >1 parameter ho → parentheses zaruri:

const sayHi = () => "Hi!"; // no parameter
const sum = (a, b) => a + b; // 2 parameters
console.log(sayHi()); // Hi!
console.log(sum(5, 10)); // 15

const square = x => x * x;
console.log(square(6)); // 36

// Object return karna ho → parentheses me rakhna
const getUser = () => ({ name: "Kabeer", age: 18 });
console.log(getUser()); // { name: "Kabeer", age: 18 }

// Difference from Normal Function (this binding)

const person1 = {
  name: "Kabeer",
  greet: function() {
    setTimeout(function() {
      console.log(this.name); // undefined, this = window/global
    }, 1000);
  }
};
person1.greet();

const person2 = {
  name: "Kabeer",
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // Kabeer, arrow fn inherits this
    }, 1000);
  }
};
person2.greet();

// Normal function → this depends on call site
// Arrow function → this depends on where it is defined