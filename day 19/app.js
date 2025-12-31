// ===============================
// LocalStorage vs SessionStorage
// ===============================

// Browser ke andar data store karne ke liye use hoti hai
// Data key-value pair me hota hai
// Value hamesha STRING hoti hai

// --------------------------------
// LOCAL STORAGE
// --------------------------------
// Permanent storage
// Browser close / refresh ke baad bhi data rehta hai

// setItem → data save karna

localStorage.setItem("name", "Kabeer");
localStorage.setItem("age", "22");


// getItem → data lena

console.log(localStorage.getItem("name")); // Kabeer
console.log(localStorage.getItem("age"));  // 22


// removeItem → specific item delete

localStorage.removeItem("age");


// length → total stored items

console.log(localStorage.length);


// key(index) → index se key ka naam

console.log(localStorage.key(0));


// clear → saara localStorage delete
// ⚠️ Dangerous — sab kuch delete ho jata hai

// localStorage.clear();

// --------------------------------
// OBJECT / ARRAY STORAGE (IMPORTANT)
// --------------------------------

// LocalStorage object ko direct store nahi karta
// JSON.stringify → save
// JSON.parse → read

const user = {
  name: "Kabeer",
  role: "Student",
  skill: "JavaScript"
};

// Save object
localStorage.setItem("user", JSON.stringify(user));

// Get object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);


// Array example

const skills = ["HTML", "CSS", "JS"];

// Save array
localStorage.setItem("skills", JSON.stringify(skills));

// Get array
const storedSkills = JSON.parse(localStorage.getItem("skills"));
console.log(storedSkills[2]); // JS


// --------------------------------
// SESSION STORAGE
// --------------------------------
// Temporary storage
// Tab close → data auto delete

// setItem

sessionStorage.setItem("sessionUser", "Kabeer");


// getItem

console.log(sessionStorage.getItem("sessionUser"));


// removeItem

sessionStorage.removeItem("sessionUser");


// clear

// sessionStorage.clear();


// --------------------------------
// LOCAL vs SESSION (REAL DIFFERENCE)
// --------------------------------

// LocalStorage → long term data
// SessionStorage → short term data

// Example:
// Theme → localStorage
// OTP / temporary login → sessionStorage
