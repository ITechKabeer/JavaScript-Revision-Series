// Primitive vs By Refrence 
// Primitive Data Type : String("kabeer"), number(12, 12.452), boolean(true,false),null,undefined,symbol("name"),bigint  
// Refrence Data Type : Array, function, object

// Primitive
let a = "Kabeer"; //string
let b = 100; //number
let c = true; //boolean
let d = null; //null (icko humne value hi null di hai means tumhare pass value tu hai lekin khhali hai)
let e; //undefined (icko value nhi di tu us ne undeined leliya khud)
let g = 12345678997723457689n;
let h = a
h = "hussain"
let i = "100";
console.log(h) //output: hussain , result corrected  
console.log(a) //output: Kabeer , result corrected 
// Reason : ye sab primitive type hain jab hum aik variable ko kisi dosre variable me assign kren ge tu exact value assign nhi hogi balke uski copy assign hogi agr hum copy me changes kren ge tu real value me change nhi hoga

//By Refrence
var obj1 = {
    name: "kabeer",
    age: 18,
    student: true,  
}   //object
var obj2 = obj1
function foo(){
    console.log("Bro Kese Ho!")
} //function
var arr1 = [1,2,3]  //ARRAY
var arr2 = arr1
arr2.pop() //pop() : last wali value hatado  
console.log (arr2) //output : [1,2], result correct
console.log (arr1) //output : [1,2], lekin value tu [1,2,3] thi ,tu output [1,2] ye kyu,
// reason : kyu array by refrence hota hai hum ne arr2 ko arr1 assign diya tu us ne humein alag copy nhi di value ki us ne humein exact wohi value di agr hum arr2 me change kren ge tu value arr1 me bhi change hogi yehi cheez object or function me hogi kyu ke wo BY REFRENCE hain

// TYPEOF 
console.log(typeof a)
console.log(typeof obj1)
console.log(typeof g)

// kisi bhi value ki type maloom krne ke liye typeof use hota hai

// "==" & "==="
console.log(b == i) //output: true; Reason : "==" ye sirf value chack krta hai same hai ya nhi 
console.log(b === i) //output: false; Reason : "==" ye sirf value chack nhi krta balke type bhi check krta hai

//type conversion
console.log("5" + 1) //output 51 reason : javascript opreator dekh kr type convert bhi krdeta hai like yahan "5" or 1 tha or opreator + tha tu + concatenation/addition kr ta hai tu javscript ne  1 ko string me convert krdiya krdiya tu ye "51" hogaya 
console.log("5" - 1) //output 4 reason : yahan "5" or 1 tha or opreator - tha tu - subtraction kr ta hai tu javscript ne 5 ko number e convert krdiya tu ye "4" hogaya 