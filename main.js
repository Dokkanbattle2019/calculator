// boutons
let boutonUn = document.getElementById("boutonUn")
let boutonDeux = document.getElementById("boutonDeux")
let boutonTrois = document.getElementById("boutonTrois")
let boutonQuatre = document.getElementById("boutonQuatre")
let boutonCinq = document.getElementById("boutonCinq")
let boutonSix = document.getElementById("boutonSix")
let boutonSept = document.getElementById("boutonSept")
let boutonHuit = document.getElementById("boutonHuit")
let boutonNeuf = document.getElementById("boutonNeuf")
let boutonZero = document.getElementById("boutonZero")
let boutonPlus = document.getElementById("boutonPlus")
let boutonMoins = document.getElementById("boutonMoins")
let boutonFois = document.getElementById("boutonFois")
let boutonDivise = document.getElementById("boutonDivise")
let boutonEgal = document.getElementById("boutonEgal")
let boutonAC = document.getElementById("boutonAc")





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
    if (operator === "+") {
        return add(a, b)

    } else if (operator === "-") {
        return substract(a, b)

    } else if (operator === "*") {
        return multiply(a, b)

    } else if (operator === "/") {
        return divide(a, b)

    }
}



