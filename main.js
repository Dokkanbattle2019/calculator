// les 3 variables d'une opération : A , SIGNE D"OPÉRATION ET B 
let a = ""
let b = ""
let operation = ""




// fonctions de calculs

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator = "+") {
        return add(a, b)
    }
    if (operator = "-") {
        return substract(a, b)
    }
    if (operator = "*") {
        return multiply(a, b)
    }
    if (operator = "/") {
        return divide(a, b)
    }
}