const body = document.body
const quickThme = localStorage.getItem("quickTheme")

let container = document.createElement("div")
container.classList.add("container")
body.append(container)

let heading = document.createElement("h1")
heading.classList.add("heading")
heading.innerHTML = "🔍 Eligibility Checker"
container.prepend(heading)

let heading2 = document.createElement("h4")
heading2.classList.add("heading2")
heading2.innerHTML = "Check CNIC eligibility & status instantly."
container.append(heading2)

let input = document.createElement("input")
input.type = "text"
input.placeholder = "Name"
container.append(input)

let birthInput = document.createElement("input")
birthInput.type = "text"
birthInput.placeholder = "Date of Birth"
container.append(birthInput)

birthInput.addEventListener("focus", () => {
    birthInput.type = "date"
    setTimeout(() => {
        birthInput.showPicker?.();
        birthInput.focus();
    }, 0);
})

birthInput.addEventListener("blur", () => {
    inputType()
})

function inputType() {
    if(!birthInput.value){
        birthInput.type = "text"
    }else if(birthInput.value){
        birthInput.type = "date"
    }
}


let btnDiv = document.createElement("div")
btnDiv.classList.add("btn-div")
container.append(btnDiv)

let result = document.createElement("p")
result.classList.add("result", "hide")
result.innerHTML = ""
container.append(result)


let button = document.createElement("button")
button.classList.add("check-btn")
button.innerHTML = "Check"
btnDiv.append(button)
button.addEventListener("click", () => {
    birthCalculator()
})


let footer = document.createElement("footer")
footer.innerHTML = "Made by Kabeer Hussain ❤️ || Mern Stack Learner"
container.append(footer)

function birthCalculator(){
    let userName = input.value
    let birthDate = birthInput.value
    let userDate = new Date(birthDate)
    let newDate = new Date
    let dateOperate = newDate.getFullYear() - userDate.getFullYear()
    if(dateOperate >= 18){
        result.innerHTML = `🎉 Congratulations! ${userName} You’re eligible—your journey starts here!`
        result.classList.remove("hide", "ineligible")
        result.classList.add("eligible")
    }else if(dateOperate < 18){
        result.innerHTML = `😔 Sorry! ${userName} You’re not eligible yet, but good things take time.`
        result.classList.remove("hide", "eligible")
        result.classList.add("ineligible")
    }
    input.value = ""
    birthInput.value = ""
    inputType()
}

let themeDiv = document.createElement("div")
themeDiv.classList.add("theme-div")
container.prepend(themeDiv)

let themeBtn = document.createElement("button")
themeBtn.classList.add("theme-btn")
themeBtn.innerHTML = "☀️"
themeDiv.append(themeBtn)

themeBtn.addEventListener("click", () => {
    themeChange()
})

if(quickThme === "dark"){
    body.classList.add("dark-theme")
    themeBtn.innerHTML = "🌙"
}else if(quickThme === "light"){
    body.classList.remove("dark-theme")
    themeBtn.innerHTML = "☀️"
}

function themeChange() {
    body.classList.toggle("dark-theme")
    
    if(body.classList.contains("dark-theme")){
        localStorage.setItem("quickTheme", "dark")
        themeBtn.innerHTML = "🌙"
    }else{
        localStorage.setItem("quickTheme", "light")
        themeBtn.innerHTML = "☀️"
    }
}
