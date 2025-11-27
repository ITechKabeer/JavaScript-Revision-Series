// JavaScript Day 9 
// Function (it's like a homechef, apko khana khana hai tu ap bar bar usko invoke kren ge same function ka matlab hai us kaam ko bar bar krna jab jab usko invoke kren)
// Function 2 tarah kr hain arrow , normal

//NORMAL
function foo() {
    console.log("Salam Kabeer")
} //ye abhi execute nhi howa bacause abhi call nhi kiya icko 

foo() // now function work //output : Salam Kabeer

// argument,parameter 

function sum(a , b)//parameter
{ 
    console.log(a + b) 
}

sum(1545,7584) //argument //output : 9129



// return keyword
function divide(a, b){
    return a / b
}

const result = divide(60, 5)
console.log(result)


// Hoisting Example — (Correct)
mul(2,5) // Works — Because function declaration is hoisted
function mul(a , b){ 
    console.log(a * b) 
}

// Practice Question 
greet()
function greet(){
    console.log("Hello Kabeer!")
}
greet()
greet()

function add(a,b){
    console.log(a + b)
}

add(10, 20)

function square(a){
    console.log(a*a)
}
square(6)

function intro(name,age){
    console.log(`My Name is ${name}.I am ${age} year old`)
}

intro("Kabeer", 18)

function operate(a,b,opreator){
    // return a,b,opreator
    if(opreator === "+"){
        return a + b;
    }
    else if(opreator === "-"){
        return a + b;
    }
    else if(opreator === "*"){
        return a + b;
    }
    else if(opreator === "/"){
        return a + b;
    }
}

let result1  = operate(5,10,"+")
let result2  = operate(50,10,"-")
let result3  = operate(5,10,"*")
let result4  = operate(5,10,"/")
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

function isEven(num){
    if(num % 2 === 0){
        return "Even Number"
    }else{
        return "Odd Number"
    }
}

let result5 = isEven(24)
console.log(result5)
let result6 = isEven(37)
console.log(result6)