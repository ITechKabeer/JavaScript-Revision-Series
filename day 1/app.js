// Alert/DISPLAY 
alert("Hello! Welcome To Our Website")
document.writeln("Kabeer Hussain Learn JavaScript")
//Variable
// three Variable 
// 1. var (es5) 
// 1. let (es6) 
// 1. const (es6)

// var (es5)

var firstName = "Kabeer";
var lastName = "Hussain";
var age = 18
var role = "student";
var firstName = "Hafiz"

console.log("My Name is " + firstName + " " + lastName + ".My age is " + age + ".I am a " + role + ".")
console.log(`My Name is ${firstName} ${lastName}.My age is ${age}.I am a ${role}.`)

// Let (Es6)

let FirstName = "Kabeer";
let LastName = "Hussain";
let Age = 18
let Role = "student";
FirstName = "Hafiz"; //correct way to re-assign the value
console.log("My Name is " + FirstName + " " + LastName + ".My age is " + Age + ".I am a " + Role + ".")
console.log(`My Name is ${FirstName} ${LastName}.My age is ${Age}.I am a ${Role}.`)

// let firstName = "Hafiz"  // output : Uncaught SyntaxError: Identifier 'firstName' has already been declared 
//Reason : var mein (ES5) is tarah ki changes ho sakti thi kyunki wo usko aik new variable bana deta tha, lekin let usi variable mein changes nahi karta agar aap usko dobara declare karein. Isliye, "2" let use karne par let error dega ke yeh variable pehle hi declared hai. 

// const (es6)

const product = {
    fullName : "Paeker Jotter Standard CT Ball Pan (Black)",
    isdealclose : true,
    rating : 4.2,
    price : 270 + "Rs",
}

product.price = product["price"] = 300 + "Rs",
product.rating = product.rating = 4.5,
console.log(product)
// For Type  
// typeof product.price  //output  'string'

// HOISTING 
// var //var me craetion phase me value undefined hoti hai jab execute vlaue na ho,Ic liye ye error nhi dega 

console.log(a) // output : undefined , reason : abhi value execute nhi hoi tu us ne default undefined le liya
var a = 15
console.log(a)

// let  //let me craetion phase me value assign nhi hoti hai var ki tarah jese usko undefined assign hai,Ici liye jab execute na ho tu ye error  dega

console.log(b) // output : Uncaught ReferenceError: Cannot access 'b' before initialization, reason : abhi value execute nhi hoi tu let ke pass koi value nhi hai ic liye us ne error diya
let b = 15
console.log(b)


// const  //const me craetion phase me value assign nhi hoti hai var ki tarah jese usko undefined assign hai,Ici liye jab execute na ho tu ye error  dega

console.log(c) // output : Uncaught ReferenceError: Cannot access 'c' before initialization, reason : abhi value execute nhi hoi tu let ke pass koi value nhi hai ic liye us ne error diya
const c = 15
console.log(c)

//  var hoist hota hai lekin usko value = undefined asign hoti hai
//  Let aur Const hoist hote hain but unko value assign nahi hoti, isliye TDZ error hota hai.