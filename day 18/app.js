// Template Literals kya hote hain?
// Template literals backticks ( ) use karte hain
// Normal quotes (' ' ya " ") se zyada powerful hotay hain.

let name = "Kabeer";
let age = 18;
console.log(`My name is ${name} and I am ${age} years old`);

let a = 10;
let b = 5;

console.log(`Sum is ${a + b}`);
console.log(`Result: ${a * b}`);

let text = `Hello
How are you?
I am fine`;
console.log(text)

let card = `
  <div class="card">
    <h2>User Profile</h2>
    <p>Name: Kabeer</p>
    <p>Role: Developer</p>
  </div>
`;

console.log(card);

let user = "Kabeer";
let followers = 1000;

let message = `
Hello ${user} 👋

🎉 Congratulations!
You have crossed ${followers + 1} followers.

Keep growing 🚀
`;

console.log(message);