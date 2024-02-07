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
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    if (operator === 'add') return n1 + n2
    if (operator === 'subtract') return n1 - n2
    if (operator === 'multiply') return n1 * n2
    if (operator === 'divide') return n1 / n2
}

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculatorKeys")
const display = calculator.querySelector(".calculatorDisplay")


keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))

    
    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
            display.textContent = keyContent
          } else {
            display.textContent = displayedNum + keyContent
          }
          calculator.dataset.previousKeyType = 'number'
    }
    
    if (action === "decimal") {

        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.'
        }   else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
            display.textContent = '0.'
        }

        calculator.dataset.previousKeyType = 'decimal'
    }
    
    if (action === "clear") {

        if (key.textContent === 'AC') {
            calculator.dataset.firstValue = ''
            calculator.dataset.modValue = ''
            calculator.dataset.operator = ''
            calculator.dataset.previousKeyType = ''
        } else {
            key.textContent = 'AC'
        }

        display.textContent = 0
        key.textContent = 'AC'
        calculator.dataset.previousKeyType = 'clear'
    }

    if (action !== 'clear') {
        const clearButton = calculator.querySelector('[data-action=clear]')
        clearButton.textContent = 'CE'
      }
    
    if (action === "calculate") {
        let firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        let secondValue = displayedNum

        if (firstValue) {
            if (previousKeyType === 'calculate') {
                firstValue = displayedNum
                secondValue = calculator.dataset.modValue
            }
            display.textContent = operate(firstValue, operator, secondValue)
        }

        calculator.dataset.modValue = secondValue
        calculator.dataset.previousKeyType = 'calculate'
    }
    
    if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
    ) {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum

        if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
            const calcValue = operate(firstValue, operator, secondValue)
            display.textContent = calcValue

            calculator.dataset.firstValue = calcValue
        } else {
            calculator.dataset.firstValue = displayedNum
        }
        

        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.operator = action
    }
    console.dir(previousKeyType)
 }
})