// ARRAY (Collection of Items) []
let arr = ['kabeer', 'hussain', 'waleed', 'faizan', 'asif']
let arr2 = arr
let arr3 = ['waqas', 'farha', 'yameen', 'majid', 'aqib']
let fruits = ['apple', 'banana', 'orange', 'mango', 'blueberry', 'coconut']
let vegetables = ['tomato', 'potato', 'carrot', 'lemon', 'onion']
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 78, 72, 64]
let number1 = [1, 2, [3, 4], 5, 6, [7, 8, 9, 45], 78, 72, 64]
let concat1 = vegetables.concat(fruits)

    
// SUM CALCULATION & AVERAGE
let sum = 0;
let marks = [85, 40, 90, 75, 56]
for(let val of marks){
    sum += val;
}
let avg = sum / 5
console.log(sum)
console.log(avg)


// DISCOUNT PRICE 
let price = ['60', '500', '810', '900', '753']
for(i = 0; i < price.length; i++){
    let offer = price[i] / 10;
    let currentPrice = price[i] - offer;
    console.log(currentPrice)
}

// ARRAY METHOD 
console.log(arr)
arr2.push('anwar') // ARRAY ME ADD KRE GA END ME
console.log(arr2) //Update Array
var deleteitem1 = vegetables.pop() // ARRAY ME DELETE & RETURN KRE GA END ME
console.log("deleted : ", deleteitem1) //RETURN
console.log(vegetables) //Update Array
var deleteitem2 = fruits.shift() //ARRAY ME DELETE & RETURN KRE GA START ME
console.log("deleted : ", deleteitem2) //RETURN
fruits.unshift('watermelon') //ARRAY ME ADD KRE GA START ME
console.log(fruits) //Update Array
console.log(arr.toString()) // output : kabeer,hussain,waleed,faizan,asif,anwar 
console.log(arr.slice(2, 5)) // same as string slice method ,slice array ki copy banata hai
console.log(number.splice(2, 5, 102,554541,8741)) 
// console.log(number.splice())
console.log(number) // output :  [1, 2, 102, 554541, 8741, 8, 9, 45, 78, 72, 64]
console.log(concat1)
console.log(concat1.indexOf("blueberry")) // same as string indexof
console.log(concat1.includes("apple")) //same as string includes
console.log(arr3.join("-"))  // output : waqas-farha-yameen-majid-aqib
console.log(arr3.reverse())  // output : ['aqib', 'majid', 'yameen', 'farha', 'waqas'] , reverse the array
console.log(vegetables.sort())  // output : ['carrot', 'lemon', 'potato', 'tomato'] , alphabate ke hisab se arrange krta hai
console.log(number1.flat())  // output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 78, 72, 64] , aik array me convert krta hai
console.log(number1.fill(0))  // output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 78, 72, 64] , aik array me convert krta hai
console.log(vegetables.at(-2)) // same as string at

// ORIGINAL ARRAY CHANGE : push, pop, shift, unshift, splice, sort, reverse, fill
// COPY ORIGINAL ARRAY : slice, concat, join, includes