let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn10 = document.getElementById("btn10")
let btn11 = document.getElementById("btn11")
let btn12 = document.getElementById("btn12")
let btn13 = document.getElementById("btn13")
let btn14 = document.getElementById("btn14")
let btn15 = document.getElementById("btn15")

btn1.addEventListener("click", () => {
    document.body.classList.toggle("background")
})

btn3.addEventListener("dblclick", () => {
    console.log("Double Clicked!")
})

btn2.addEventListener("mouseover", () => {
    btn2.style.background = "crimson"
    btn2.style.color = "white"
})
btn2.addEventListener("mouseout", () => {
    btn2.style.background = "transparent"
    btn2.style.color = "black"
})

btn5.addEventListener("mousemove", () => {
    btn2.style.background = "transparent"
    btn2.style.color = "black"
})

btn15.addEventListener("keyup", (e) => {
    console.log("Keypress!" , e.key)
})
btn15.addEventListener("keydown", (e) => {
    console.log("Keydown!", e.key)
})
btn15.addEventListener("focus", () => {
    console.log("input pe focus howa")
})
btn15.addEventListener("blur", () => {
    console.log("input se blur hata")
})

// btn14.addEventListener("submit", () => {
//     console.log("input filled submit howa")
// })

btn12.addEventListener("touchstart", ()=> {
    console.log("Finger touched")
});
