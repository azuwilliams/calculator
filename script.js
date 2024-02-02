function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

let num1
let num2
let operator
let displayValue

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculatorKeys")
const display = calculator.querySelector(".calculatorDisplay")
console.dir(keys)
console.dir(display)


keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    if (!action) {
        console.log(keyContent)
    }
    
    if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
    ) {
        console.log("operator key!")
    }
    
    if (action === "decimal") {
        console.log("decimal key!")
    }
    
    if (action === "clear") {
        console.log("clear key!")
    }
    
    if (action === "calculate") {
        console.log("equal key!")
    }
    if (!action) {
        if (displayedNum === '0') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }
 }
})