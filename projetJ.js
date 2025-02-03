let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.textContent = '0';
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Erreur : Division par zéro");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = '';
    previousInput = '';
    display.textContent = result;
}
