const a = 123.456794163110210;
const b = 100000000000;
let c = 123456789;
let d = c.toExponential(3)
let e = parseInt(a)
let f = parseFloat(a)
let g = isFinite(c)
let h = isNaN(c)
let i = c.toLocaleString("de-DE", { style: "currency", currency: "USD" });
let j = b.toLocaleString();


// ==================================
// Number Methods
// ==================================

console.log(a.toFixed(2)) // output : 123.46 , fixed decimal leta hai
console.log(a.toPrecision(3)) // output : 123 , decimal se pehle ki value ko importance deta hai agr . ke bad ke decimal ko round off krdeta hai
console.log(d) // ouput : 1.235e+8 , . ke bad ke "toExponential(3)" sirf 3 decimal lena 
// ouput : 1.235e+8 , . ke bad ke "toExponential(3)" sirf 3 decimal lena 
console.log(e) // output : 123 , only integers allowed
console.log(f) // output : 123.4567941631102 , decimal also allowed
console.log(g) // output : true ,
console.log(h) // output : false ,
console.log(i) // output : 123.456.789,00 $
console.log(j) // output : 100,000,000,000

// ==================================
// MATHS CONCEPT 
// ==================================

let k = Math.random()
let l = Math.floor(5152121.15151)
let m = Math.ceil(12415612.8598)
let n = Math.round(855956.5464)
let o = Math.max(12,15215,12,1521,510,554,156,1)
let p = Math.min(12,15215,12,1521,510,554,156,1)
let q = Math.fround(12,15215,12,1521,510,554,156,1)

console.log(k) // random number generator
console.log(l) // output : 5152121
console.log(m) // output : 12415613
console.log(n) // output : 855957
console.log(o) // output : 15215
console.log(p) // output : 1
console.log(q) // output : 12

// ==================================
// DICE NUMBER GENERATOR
// ==================================

console.log(Math.ceil(Math.random() * 6))  //Dice Generator