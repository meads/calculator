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

// clearButtonClicked clears any variables and display values
const clearButtonClicked = function() {
    operand1 = ""
    operator = ""
    operand2 = ""
    clearDisplay()
}

// buttonClicked captures the correct operand and updates the display
const buttonClicked = function(key) {
    if (!operator) {
        operand1 += key
        updateDisplay(operand1)
    } else {
        operand2 += key
        updateDisplay(`${operand1} ${operator} ${operand2}`)
    }
}

// operatorClicked evaluates any existing expressions and sets the operator
// for the next expression accordingly for a basic calculator
const operatorClicked = function(op) {
    // ignore the operator if there isn't a first operand specified
    if (!operand1) {
        return
    }

    // ignore second operator clicked if we don't have already both
    // the first operand and an operator
    if (operand1 && operator && !operand2) {
        return
    }

    // for the sake of this "basic" calculator project, only allow two operands
    // and one operator at one time. if we are here and we have two operands 
    // and one operator, simply evaluate that existing expression and 
    // use that result as the value for the first operand, clearing out the 
    // second operand for use with the new expression being calculated.    
    if (operand1 && operator && operand2) {
        let result = operate(operand1, operator, operand2)
        operand1 = result
        
        operator = op
        operand2 = ""
        updateDisplay(`${operand1} ${operator}`)
        
        return
    }

    // if there is a first operand but no operator, capture the operator specified
    operator = op
    updateDisplay(`${operand1} ${operator}`)
}

// equalsClicked ignores any clicks if there isn't already an expression to 
// evaluate, otherwise evaluates the expression, displays the results and clears
// any existing variables
const equalsClicked = function() {
    if (!operand1 || !operator || !operand2) {
        return
    }
    if (operand1 && operator && operand2) {
        updateDisplay(`${operand1} ${operator} ${operand2}`)
        let result = operate(operand1, operator, operand2)

        updateDisplay(result)
        operand1 = ""
        operator = ""
        operand2 = ""
    }
}

// updateDisplay concatenates the supplied string s to the existing display text
function updateDisplay(s) {
    clearDisplay()
    const display = document.querySelector("#display")
    display.textContent += s
}

// clearDisplay sets the display to an empty string
function clearDisplay() {
    const display = document.querySelector("#display")
    display.textContent = ""
}

// operate takes two operands and an operator and calls the 
// appropriate operation returning the result
function operate(a, op, b) {
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
    return result
}
