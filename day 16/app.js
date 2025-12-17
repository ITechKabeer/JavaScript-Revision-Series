// Destructuring ka matlab hai:
// Array ya Object ke andar se values ko nikaal kar variables me rakhna — short & clean way me

// Q 1️⃣
const arr = [10, 20, 30];
// ➡ Destructure karo aur variables banao:
// first
// second
// third
const [first, second, third] = arr
console.log(first,second,third)

// Q 2️⃣
const colors = ["red", "green", "blue"];
// ➡ red aur blue nikaalo (green skip karo)
const [firstColor, , lastColor] = colors
console.log(firstColor, lastColor)

// Q 3️⃣
const numbers = [5];
// ➡ Destructure karo:
// a = 5
// b = 10 (default value)
const [a, b = 10] = numbers
console.log(a,b)

// Q4️⃣
const user = {
  name: "Ali",
  age: 22
};
// ➡ name aur age destructure karo
let {name,age} = user
console.log(name, age)

// Q5️⃣
const user2 = {
  name2: "Ali"
};
// ➡ name aur age destructure karo
// 📌 age ki default value 18 honi chahiye
let { name2, age2 = 18 } = user2
console.log(name2 , age2)

// Q 6️⃣ Array + Rest
const arr2 = [1, 2, 3, 4, 5];
// ➡ first, second, aur baqi sab rest me store karo
const [ firstNum, secondNum, ...rest ] = arr2
console.log(firstNum)
console.log(secondNum)
console.log(rest)

// Q7️⃣ Object Rename
const user3 = {
  name: "Ahmed",
  role: "admin"
};
// ➡ name ko userName ke naam se destructure karo
var {name: userName} = user3
console.log(userName)

// Q8️⃣ Nested Array
const data = [1, [2, 3]];
// ➡ x = 1, y = 2, z = 3
const [x, [y, z]] = data
console.log(x)
console.log(y)
console.log(z)

// Q9️⃣ Nested Object
const employee = {
  id: 101,
  profile: {
    username: "kabeer",
    email: "test@gmail.com"
  }
};
// ➡ username aur email destructure karo
const { profile : {username, email}} = employee
console.log(username)
console.log(email)

// Q🔟 Skip + Default
const arr3 = [undefined, 50];
// ➡
// m default ho 10
// n = 50
const [m = 10, n] = arr3
console.log(m)
console.log(n)

// Q 1️⃣1️⃣
function printUser({name , age} = user) {
  console.log(name)
  console.log(age)
}
printUser()
// ➡ name aur age print karo

// Q1️⃣2️⃣ Function Parameter Destructuring
const product = {title: "Fanta", price: 80}
function showProduct({title , price} = product) {
  console.log(title, price);
}
showProduct()
// ➡ Function parameters me destructuring use karo

//Q1️⃣3️⃣ API-like Response
const response = {
  status: 200,
  data: {
    users: ["Ali", "Ahmed", "Sara"]
  }
};
// ➡ users array destructure karo
const [firstUser, secondUser, thirdUser] = response.data.users
console.log(firstUser)
console.log(secondUser)
console.log(thirdUser)

// Q1️⃣4️⃣ Function Return
function getConfig() {
  return {
    theme: "dark",
    language: "en"
  };
}
// ➡ Function call ke sath destructuring karo
const {theme, language} = getConfig()
console.log(theme)
console.log(language)

// Q1️⃣5️⃣ Loop + Destructuring
const users = [
  { name: "Ali", age: 22 },
  { name: "Ahmed", age: 25 }
];
// ➡ for...of loop me destructuring use karo
for(let {name,age,profession = "Software Engineer"} of users){
    console.log(name, age, profession)
}

// Q1️⃣6️⃣ Mixed Destructuring
const data2 = {
  meta: {
    total: 100
  },
  items: [10, 20]
};
// ➡ total, firstItem, secondItem nikaalo

const {total} = data2.meta
console.log(total)
const [firstItem, secondItem] = data2.items
console.log(firstItem)
console.log(secondItem)

// Q1️⃣7️⃣ Safe Destructuring
const settings = {};
// ➡ theme destructure karo (default "light")
const {themeDefault = 'light'} = settings
console.log(themeDefault)
// lifo method

// Q1️⃣8️⃣ Variable Swap
let e = "hello";
let f = "world";
// ➡ Destructuring se values swap karo
[e, f] = [f, e]
console.log(e)
console.log(f)

// Q1️⃣9️⃣ Function + Default Object
function initApp({ mode = "production" } = {}) {
  console.log(mode);
}
// ➡ Safe destructuring use karo:
// mode default "production"

// Q2️⃣0️⃣ Real Interview Question
const user4 = {
  name: "Ali",
  skills: ["JS", "React", "Node"]
};
// ➡
// name
// firstSkill
// baqi skills otherSkills me
const {name: fullName} = user4
const [firstSkill, ...otherSkills] = user4.skills
console.log(fullName)
console.log(firstSkill)
console.log(otherSkills)