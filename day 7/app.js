var resturantMenu = ["Korma", "Biryani", "Karahi", "Pizza", "Pastry"]

// FOREACH
resturantMenu.forEach((item, idx) => {
  console.log(idx + ": " + item);
});
//FOREACH USE: jab mukammal array pe iterate krna ho , no modification , no new array , return ko ignore krta hai 

// MAP
const lower = resturantMenu.map(item => item.toLowerCase());
console.log(lower)
const lengths = resturantMenu.map((item, idx) => {
  console.log(idx + ": " + item)
  return item.length;
});
//MAP USE: jab mukammal array pe iterate krna ho , with modification , with new array , map: return krta hai agr ap return nhi krwao ge tu ye undefined dega

//FILTER 
const longItems = resturantMenu.filter(item => item.length > 5);
//FILTER USE: jab array pe iterate krwa kr kuch cheezin nikalni ho , new array dega return krega truthy value , falsy value return nhi kre ga


//Find 
const firstLong = resturantMenu.find(item => item.length > 5);
// "Biryani"
//FIND USE : ye filter ki tarah hai bss apki matchin ka first item dega or kuch nhi,single value return krta hai, kuch na mile tu undefined

//REDUCE
const sumLengths = resturantMenu.reduce((acc, item) => {
  return acc + item.length;
}, 0);

const concatNoInit = resturantMenu.reduce((acc, i) => acc + ", " + i);
console.log("reduce concat no init:", concatNoInit);
//REDUCE USE : ye 2 argument leta hai (acc,curr,argument) , merge krta hai , 
// forEach / map / filter / find
// Har iteration me first parameter → current element hota hai
// ✔ LEKIN reduce
// Har iteration me:
// First parameter → accumulator (previous total)
// Second parameter → current element, 
// 3rd se wo argument leta hai like 0  