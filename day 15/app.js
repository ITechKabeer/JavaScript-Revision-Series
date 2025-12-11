// LOOP 
// kisi kaam ko bar bar krna (iteration)
// for Loop : 
// Jab humein pata ho ke itni dafa iteration krwana hai
// syntax for(initilization , condition, increment/decrement){}
for (i = 0; i <= 10 ; i++){
    console.log("For ka loop chala" , "===>>",i)
}
// WHILE LOOP : 
// Jab humein pata ho ke ic condition pe loop ko khatam krna hai lekin condition kis iteration pe mukkammal hogi ye nhi pata 
// syntax :
// initilization
// while(condition){
// increment/decrement
// }
let a = 0;
while(a < 8){
    console.log("while ka loop chala",  "===>>",a)
    a++
}

// DO WHILE LOOP :
// ye loop pehli martaba chalne ke bad phir condition ko follow krta hai matlab ke agr condition false hai tab bhi ye loop aik dafa tu chalega hi 
// syntax :
// do{
// initilization
// increment/decrement 
// }while(condition);
do{
    b = 20
    console.log("do while chala === " , b)
    b++
}while(b <= 5); // consition false hai phir bhi aik dafa chhala zaroor 
    
// for of LOOP : 
// Ye arrays, strings, sets, maps ke andar values par loop lagata hai.
// syntax : 
// arr,string, etc
// for (let val of variable){}
let arr = ["10", "20", "30", "40", "50", "60", "70", "80", "90"]
for (let value of arr){
    console.log(value)
}

// for of LOOP : 
// Ye obj ka andar values par loop lagata hai.
// syntax : 
// obj
// for (let val in obj){}
let obj = {Name : "Kabeer", Father : "Muhammad Shahid", Course : "Web n App Deveopment", Campus : "Zaitoon Ashraf IT Park", Batch : 17}
for (let key in obj){
    console.log(key, " : ", obj[key])
}

//Break : kisi condition pe loop ko rukne ke liye
//continue : kisi iteration ko skip krne ke liye
for(let i = 0; i <= 9; i++){
    if(i === 3) continue;
    if(i === 8) break;
    console.log("for chala ===>>", i)
}

// PRACTICE QUESTION 

// for loop se 10 se 1 tak reverse counting print karo.
for(i = 10; i > 0; i--){
    console.log("for reverse chala ===>>", i)
}

//for loop se poora array print karo.
let fruits = ["apple", "mango", "banana", "orange"];
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i], "===>>", i)
}

//for loop se 1 se 100 tak numbers ka sum calculate karo.
let sum = 0
for(i = 0; i <= 100; i++){
    sum = sum + i
}
console.log(sum)

//while loop se 5 se 15 tak numbers print karo.
let j = 5;
while(j <= 15){
    console.log(j)
    j++
}

//while loop se sirf odd numbers (1–15) print karo.
let k = 0;
while(k <= 15){
    if(k % 2 !== 0){
        console.log("odd ka loop chala ===>>", k)
    }
    k++
}

//while loop use karke ek variable i = 10 ko tab tak print karo jab tak i > 3 ho, aur har dafa i--.
let l = 10;
while(l > 3){
    console.log("i = 10" , l)
    l--
}

//do…while loop se kam se kam 1 baar "Hello" print karo chahe condition false ho.
do{
    i = 0
    console.log("hello")
    i++
}while(i > 15);

// do…while loop me i = 20 se start kar ke tab tak print karo jab tak i < 25, aur har baar i++.
let m = 20
do{
    console.log("do chala ===>>", m)
    m++
}while(m <= 25);

//for…in se sirf keys print karo.
let car = {brand: "Toyota", model: "Corolla", year: 2020};
for (let key in car){
    console.log(key)
}

//for…in loop se total marks calculate karo.
let marks = {math: 90, physics: 80, chemistry: 85};
let totalMark = 0;
for (let key in marks){
    totalMark = totalMark + marks[key]
}
console.log(totalMark)