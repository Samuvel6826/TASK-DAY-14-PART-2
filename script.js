// DOM- Day -2 : Document vs Window 14/05/2023 - Part 2 - Calculator

// TITLE
let title = document.createElement("h1")
title.innerHTML = "Calculator"
title.setAttribute("id", "title")
document.body.appendChild(title)

// DESCRIPTION
let description = document.createElement("p")
description.innerHTML = "Calculator created using DOM. The keyboard events only for numbers. When any keys pressed other than number keys show an alert warning - Only numbers are allowed. Added functions to perform addition, subtraction, division, multiplication and modulus. The calculator handle infix expressions. The HTML elements are created using DOM. For styles used CSS and Bootsrap. The UI is responsive for all media screens."
description.setAttribute("id", "description")
document.body.appendChild(description)

// CALCULATOR CONTAINER
let calculator = document.createElement("div")
calculator.setAttribute("id", "calculator")
document.body.appendChild(calculator)

// CALCULATOR DISPLAY
let input = document.createElement("input")
input.placeholder = 0
input.setAttribute("type", "text")
input.setAttribute("id", "input")
input.setAttribute("readonly", "true")
calculator.appendChild(input)

// CALCULATOR TOUCH BUTTONS
let button_wrapper = document.createElement("div")
button_wrapper.setAttribute("id", "button_wrapper")
calculator.appendChild(button_wrapper)

// BUTTON ARRAY
let btnArr = ["AC","DEL",".","*",7,8,9,"/",4,5,6,"-",1,2,3,"+",0,"00","%","="]

// LOOP TO CREATE BUTTONS
for(let i=0; i<btnArr.length; i++)
{
    let btn = document.createElement("button")
    btn.setAttribute("id", btnArr[i])
    button_wrapper.appendChild(btn)
    btn.innerHTML = btnArr[i]
let flag = true
// ASSIGNING ID'S TO THE BUTTONS
if(btn.innerHTML == "AC") {flag = false; btn.setAttribute("id", "allclear")}
if(btn.innerHTML == "DEL") {flag = false; btn.setAttribute("id", "backspace")}
if(btn.innerHTML == ".") {btn.setAttribute("id", "point")}
if(btn.innerHTML == "*") {btn.setAttribute("id", "multiply")}
if(btn.innerHTML == "/") {btn.setAttribute("id", "divide")}
if(btn.innerHTML == "-") {btn.setAttribute("id", "subtract")}
if(btn.innerHTML == "+") {btn.setAttribute("id", "add")}
if(btn.innerHTML == "%") {btn.setAttribute("id", "modulus")}
if(btn.innerHTML == "=") {flag = false; btn.setAttribute("id", "equal")}

// ASSIGNING VALUES TO THE BUTTONS
if (flag) {
btn.addEventListener("click", display)
function display() {
    input.value += btn.innerHTML
    console.log(typeof(btn.innerHTML))
} 
}

}

// FUNCTION TO CLEAR DISPLAY
let clear = document.getElementById("allclear")
clear.addEventListener("click", clearDisplay)
function clearDisplay() {
    input.value = ""
  }

// FUNCTION FOR BACKSPACE KEY
let backspace = document.getElementById("backspace")
backspace.addEventListener("click", bkdis)
function bkdis() {
    console.log("function called")
    input.value = input.value.substring(0, input.value.length-1)
  }

// FUNCTION TO CALCULATE
let calculate = document.getElementById("equal")
calculate.addEventListener("click", cal)
function cal() {
        let answer = eval(input.value);
        input.value = answer;
  }

// ATTACHING KEYBOARD EVENTS ["AC","DEL",".","*",7,8,9,"/",4,5,6,"-",1,2,3,"+",0,"00","%","="]
document.addEventListener("keyup", (event) => {
    if(event.key == "Enter") {cal()}
    else if(event.key == "Escape") {clearDisplay()}
    else if(event.key == "Backspace") {bkdis()}
    else if(event.key == ".") {input.value += "."}
    else if(event.key == "*") {input.value += "*"}
    else if(event.key == 7) {input.value += "7"}
    else if(event.key == 8) {input.value += "8"}
    else if(event.key == 9) {input.value += "9"}
    else if(event.key == "/") {input.value += "/"}
    else if(event.key == 4) {input.value += "4"}
    else if(event.key == 5) {input.value += "5"}
    else if(event.key == 6) {input.value += 6}
    else if(event.key == "-") {input.value += "-"}
    else if(event.key == 1) {input.value += "1"}
    else if(event.key == 2) {input.value += "2"}
    else if(event.key == 3) {input.value += "3"}
    else if(event.key == "+") {input.value += "+"}
    else if(event.key == 0) {input.value += "0"}
    }
)

document.addEventListener("keydown", (event) => {
    if(event.code == "Digit5" && event.shiftKey) {input.value += "%"}
}
)
// document.addEventListener("keyup", (event) => {
//     // console.log(`keyup: key: ${event.key}, code: ${event.code}`);
//     console.log(event);
//   });