// Scope, Hoisting

// Global Scope : jis ko kahin se bhi access kr skte ho 
// Function Scope : jis ko function ke andar kahin bhi acess kr skte ho
// Block Scope : jis ko {} ke andr acess kr skte hoo bss

//Global Scope
var x = 10;
function foo(){
    console.log(x) 
}
foo()
var x = 29 // var ko redecalre bhi kr ske ho
foo()

//Functional Scope
function foo2(){
    let w = 54
}
// console.log(w) //output : ReferenceError: w is not defined
// why (w function ke andar bana howa hai bahar accesable nhi hoga f,function ke andar jo variable hai wo function ke bbahar visible hi nhi hoga)

//Block Scope
{
    var v = 90
    let h = 6
}
console.log(v) //output : 90
// console.log(h) //output : ReferenceError: h is not defined
// why (block scope me var accesible hota hai beacuse wo block scope ke rule follow nhi krt lekin let,const black scope ke bahar accesible nhi hote)
// THAT,WHY ; var global scope hota hai or let, const block scope hote hain

//var Hoisting
var g;
console.log(g) //output : undefined
var g = 95;
console.log(g) //output : 95
//Why? (var variable declare krdeta hai lekin usko value assign nhi krta jab tak or jab value assign na ho tu apni deafult assign value undefined le leta hai)

//let,const Hoisting
// console.log(k) //output : ReferenceError: Cannot access 'k' before initialization
let k = 95;
console.log(k) //output : 95
//Why? (let variable declare krdete hai lekin wo TDZ(Temporal Dead Zone) me chale jate hain or jab wo TDZ me hote unko kuch bhi assign nhi hota tu error araha hota hai)

// Diffrence var , let 
// 1.
// var ko ap redeclare kr skte ho 
// let ko ap redeclare nhi kr skte, reassign zaroor kr skte ho 
// const , na redeclare , na reassign kr skte ho 
// 2.
// var global scope hota hai or hoisting me usko undefined assign hota hai 
// let block scope hota hai or hoisting me TDZ me hota hai ,no value assign
// 3.
//var loop ke andar aik hi variable ko update krta rehta hai 
//let bar bar new variable banata hai
var l = 25; 
var l = 30;
var l = 35;
var l = 40;
console.log(l)
let m = 25; 
m = 30;
m = 35;
m = 40;
console.log(m)
for(var i =0 ; i < 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
} // output : 3 3 3 (var ne usi variable ko update kiya or jab callback ka time aya tu 3 dafa three print hogaya)
for(let i =0 ; i < 3; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
} // output : 0 1 2 (let ne har bar new copy banai or har bar copy ko new value di like 0, 1, 2 ; jab callback ka waqt aya tu teeno bar new variable print howa)