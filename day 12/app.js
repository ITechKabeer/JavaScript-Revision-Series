// Javascript Dom Basic 
// Access elements in javascript 
let body = document.body
let heading1 = document.getElementById("title")
let heading2 = document.querySelector("#title1")
let p1 = document.getElementById("p1")
let lorem = document.getElementsByClassName("lorem")
let button = document.getElementsByTagName("button")
let boxes = document.querySelectorAll(".box")

// Styling 
body.style.backgroundColor = "#fbe0e0ff"
heading1.style.fontFamily = "'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;"
heading1.style.fontSize = "25px"
heading1.style.padding = "10px"
heading1.style.color = "white"
heading1.style.background = "crimson"
heading2.style.fontSize = "20px"
heading2.style.width = "250px"
heading2.style.marginTop = "10px"
heading2.style.padding = "10px"
heading2.style.color = "white"
heading2.style.background = "rgba(0, 108, 209, 1)"
lorem[0].style.background = "black"
lorem[0].style.color = "white"
lorem[0].style.padding = "20px"
button[0].style.padding = "15px"
button[0].style.background = "#1877f2"
button[0].style.color = "white"

// Changing in HTML (textContent , innerText , innerHTML)
heading1.textContent = "Kabeer Hussain" 
console.log(p1.innerText) // output : Hello (innertext hideden text ko show nhi krt,html tags accept nhi krta)
console.log(p1.textContent) // output : Hello Kabeer (text Content hideden text ko bhi show krta hai,html tag accept nhi krta)
p1.innerHTML = "<strong>SMIT Batch 17 Student</strong>"