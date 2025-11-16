// 1️⃣ Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // output: 13
console.log(a - b); // output: 7
console.log(a * b); // output: 30
console.log(a / b); // output: 3.3333333333333335
console.log(a % b); // output: 1

a++; // a becomes 11
b--; // b becomes 2
console.log(a, b); // output: 11 2


let num1 = 15;
let num2 = 4;
let result = num1 % num2; // remainder
console.log(result); // 3

// 2️⃣ Assignment Operators

let x = 10;
x += 5; // x = x + 5
console.log(x); // output: 15

x -= 3; // x = x - 3
console.log(x); // output: 12

x *= 2; // x = x * 2
console.log(x); // output: 24

x /= 4; // x = x / 4
console.log(x); // output: 6

x %= 4; // x = x % 4
console.log(x); // output: 2

// 3️⃣ Logical Operators

// AND &&

let name1 = "farhan";
let agee = 19;
let nic = true;

if(agee >= 18 && nic == true){
    console.log( name1 + ", you are eligible for a vote")
}else{
    console.log( name1 + ", you are not eligible for a vote")
} //output: farhan, you are eligible for a vote
 
// OR ||

let name2 = "adeel";
let nationalIdCard = false;
let BForm = true;

if (nationalIdCard === true || BForm === true) {
    console.log(`${name2}, 🎉 Wah! Ab ap Class ke liye SMIT ka Laptop use kar sakte ho! 💻✨`);
} else {
    console.log(`${name2}, 😢 Sorry! Ap SMIT ka Laptop abhi use nahi kar sakte...`);
} //output: adeel, 🎉 Wah! Ab ap Class ke liye SMIT ka Laptop use kar sakte ho! 💻✨

// ! NOT 

let fullName = "Kabeer";
let age = 18;
if(age = !18){
    console.log( fullName + ", you are not eligible for a NIC.")
}else{
    console.log( fullName + ", you are eligible for a NIC.")
} //output: Kabeer, you are eligible for a NIC.

// 4️⃣ Ternary Operator

// condition ? expression_if_true : expression_if_false;

let fullName2 = "Hafeez";
let age4 = 18;
age4 >= 18 ? console.log( fullName2 + ", you are eligible for a NIC.") : console.log( fullName2 + ", you are not eligible for a NIC.")// output : Hafeez, you are eligible for a NIC.
