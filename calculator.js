function sum (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    if(num2 != 0) {
        return num1/num2;
    }
    return null;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide
}