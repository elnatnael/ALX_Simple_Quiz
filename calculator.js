function Add(number1, number2) {
    return number1 + number2;
}

function Subtract(number1, number2) {
    return number1 - number2;
}

function Multiply(number1, number2) {
    return number1 * number2;
}

function Divide(number1, number2) {
    if (number2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return number1 / number2;
}

document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = Add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = Subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = Multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    try {
        const result = Divide(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    }
    catch (error) {
        document.getElementById('calculation-result').textContent = error.message;
    }
});