let displayValue = ''; // Initialize display value

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = ''
    document.getElementById('display').value = displayValue;
}

function deleteLastChar() {
    displayValue = displayValue.slice(0, -1)
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);  // Evaluate the expression
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = ''; // Reset display
    }
}