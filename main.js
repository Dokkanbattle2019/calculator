// À FIX: Quand on appuie deux fois sur un opérateur ( "+" exclu, on a 0) : UPDATE, FIXED! OMG!

// les 3 variables d'une opération : A , SIGNE D"OPÉRATION ET B 
let a = ""
let b = ""
let operator = undefined
let tout = ""


operateurs = ["+", "-", "*", "/"]


// boutons
let boutonUn = document.getElementById("1")
let boutonDeux = document.getElementById("2")
let boutonTrois = document.getElementById("3")
let boutonQuatre = document.getElementById("4")
let boutonCinq = document.getElementById("5")
let boutonSix = document.getElementById("6")
let boutonSept = document.getElementById("7")
let boutonHuit = document.getElementById("8")
let boutonNeuf = document.getElementById("9")
let boutonZero = document.getElementById("0")
let boutonPlus = document.getElementById("+")
let boutonMoins = document.getElementById("-")
let boutonFois = document.getElementById("*")
let boutonDivise = document.getElementById("/")
let boutonEgal = document.getElementById("boutonEgal")
let boutonAC = document.getElementById("boutonAc")
let boutonDecimal = document.getElementById(".")

let screen = document.getElementById("screen")
let input = document.getElementById("input")
input.textContent = ""


let boutons = document.querySelectorAll("button")
boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {


        if ((bouton.id).length === 1) {
            if (bouton.id === ".") {
                boutonDecimal.classList.add("CAONIMA")
            } else {



            }
            if (operator === undefined) {
                input.textContent += bouton.id
                a += bouton.id
                console.log("a = " + a)
                console.log("b = " + b)
                console.log("operator = " + operator)
            } else {
                b += bouton.id
                input.textContent += bouton.id

                console.log("a = " + a)
                console.log("b = " + b)
                console.log("operator = " + operator)

            }

        }

        if (bouton.id === "boutonAc") {
            input.textContent = ""
            output.textContent = ""
            a = 0 + ""
            b = 0 + ""
            operator = undefined
            console.log("a = " + a)
            console.log("b = " + b)
            console.log("operator = " + operator)
            boutonDecimal.classList.remove("CAONIMA")
        }

        // si c'est un opérateur
        if ((bouton.id).length === 2) {
            boutonDecimal.classList.remove("CAONIMA")
            if (operator === undefined) {

                operator = (bouton.id).slice(0, 1)
                input.textContent += operator
                console.log("a = " + a)
                console.log("b = " + b)
                console.log("operator = " + operator)


            } else {
                // modifier ici 
                if ((operator === "+" || operator === "-") && (b === 0 + "" || b === 0)) {
                    b = 0

                } else if ((operator === "*" || operator === "/") && (b === 0 + "" || b === 0)) {
                    b = 1
                }
                output.textContent = operate(operator, a, b)
                input.textContent = operate(operator, a, b) + (bouton.id).slice(0, 1)
                console.log(operate(operator, a, b))
                a = operate(operator, a, b) + ""
                operator = (bouton.id).slice(0, 1)
                b = 0 + ""
                console.log("a = " + a + typeof (a))
                console.log("b = " + b)
                console.log("operator = " + operator)

            }
        }

        if (bouton.id === "boutonEgal") {
            if (operator === undefined) {
                operator = "+"
                boutonDecimal.classList.remove("CAONIMA")
            } else {
                output.textContent = operate(operator, a, b)
                input.textContent = operate(operator, a, b)
                console.log(operate(operator, a, b))
                a = operate(operator, a, b) + ""
                operator = undefined
                b = 0 + ""
                console.log("a = " + a + typeof (a))
                console.log("b = " + b)
                console.log("operator = " + operator)




            }
        }
        if (bouton.id === "delete") {
            if (operator === undefined) {
                console.log("Hello")
                a = a.slice(0, -1)
                console.log("a = " + a)
                console.log("b = " + b)
                console.log("operator = " + operator)

                input.textContent = (input.textContent).slice(0, -1)
            } else {
                b = b.slice(0, -1)
                input.textContent = (input.textContent).slice(0, -1)
                console.log("a = " + a)
                console.log("b = " + b)
                console.log("operator = " + operator)
            }
            if (!(input.textContent.includes("."))) {
                boutonDecimal.classList.remove("CAONIMA")

            }
        }
    })
})








// fonctions de calculs

function add(a, b) {
    let aModified = Number(a)
    return aModified + Number(b)
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b == 0) {
        return "You cannot divide by 0, press AC"
    }
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



