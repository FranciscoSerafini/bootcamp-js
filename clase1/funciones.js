const sumar = (operando1, operando2) => {
    console.log("operando 1: ",operando1)
    console.log("operando 2: ",operando2)
    
    return operando1 + operando2
}

console.log(sumar(10,5))

//de otra forma que podemos crear una funcion

const resta = (operando3,operando4) => {
    console.log('operando1:', operando3)
    console.log('operando2:', operando4)
    return operando3 - operando4
}

const op1 = 8
const op2 = 2

console.log(resta(op1,op2))
//no hace falta los argumentos sean iguales a los parametros

//declaracion de una funcion
function restar2 (a,b) {
    return a-b
}