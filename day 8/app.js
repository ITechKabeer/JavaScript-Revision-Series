// JavaScript Day 8 
// OBJECT 

let obj = {
    name : "Kabeer",
    age : 19,
    isStudent : true,
    city : "Karachi"
} // object {
// key : value 
// } 

// Dot Notation  (Key ko access krne ke liye) 
console.log(obj.isStudent)
//[] notation (same work as dot notation)
console.log(obj["isStudent"])

// Diffrence between "." && "[]" notation
// . notation hamesha apke object me wohi value find kre ga jo apne likhi hai ye variable ko access nhi dega
// [] notation variables ko acess dega
// Examples 
// [] Notation
var fullname = "name"
console.log(obj[fullname]) //output : Kabeer  (Reason : variable ko acess deta hai)
// . Notation 
console.log(obj.fullname) //output : undefined (Reason : variable ko access nhi deta)

//Add/Delete property
obj.country = "Pakistan"

console.log(obj) // country added

obj.age = 20;
console.log(obj) //update property

delete obj.isStudent
console.log(obj)

// Nested Object (object ke andar object)
let obj2 = {
    name: "farhan",
    age: 22,
    address : {
        country: "Pakistan",
        city: "Karachi",
        house: {
            sector: "33/C",
            street: 5,
            house_no: 786,
        }
    }
}
console.log(obj2)

//Object.keys,.value,.assign,.freeze,.entries,
console.log(Object.keys(obj)) //only keys in one array
console.log(Object.values(obj)) //only values in one array
console.log(Object.entries(obj)) //key : value ,sari key value aik array me hungi or us array me har key:value aik seprate array me hungi
Object.freeze(obj) // ab object me kuch changing nhi hoskti object ko block kriya hai freeze ne 
