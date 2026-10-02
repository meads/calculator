console.log("calculator")

const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
}

const multiply = function(a, b) {
    return a * b
}

const divide = function(a, b) {
    if (b === 0) {
        alert("divisor cannot be zero")
        return 0
    }
    return a / b
}

let operand1 = ""
let operand2 = ""
let operator = ""

const clearButtonClicked = function() {
    operand1 = ""
    operator = ""
    operand2 = ""
    clearDisplay()
}

const buttonClicked = function(key) {
    if (!operator) {
        operand1 += key
        updateDisplay(operand1)
    } else {
        operand2 += key
        updateDisplay(`${operand1} ${operator} ${operand2}`)
    }
}

const operatorClicked = function(op) {
    if (!operand1) {
        return
    }
    if (operand1 && operator) {
        return
    }
    operator = op
    updateDisplay(`${operand1} ${operator}`)
}

const equalsClicked = function() {
    if (!operand1 || !operator || !operand2) {
        return
    }
    if (operand1 && operator && operand2) {
        updateDisplay(`${operand1} ${operator} ${operand2}`)
        operate(operand1, operator, operand2)
    }
    // operation
}

function updateDisplay(s) {
    clearDisplay()
    const display = document.querySelector("#display")
    display.textContent += s
}

function clearDisplay() {
    const display = document.querySelector("#display")
    display.textContent = ""
}

function operate(a, op, b) {
    console.log(`${a} ${op} ${b}`)
    a = Number(a)
    b = Number(b)
    let result = 0
    switch(op) {
        case "/":
            result = divide(a, b)
            break;
        case "x":
            result = multiply(a, b)
            break;
        case "-":
            result = subtract(a, b)
            break;
        case "+":
            result = add(a, b)
            break;
        default: 
            throw "unknown operator"
    }
    updateDisplay(result)
    operand1 = ""
    operator = ""
    operand2 = ""
}
