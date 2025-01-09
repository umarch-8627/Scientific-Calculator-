function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const expression = document.getElementById('display').value
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/log\(/g, 'Math.log10(')
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/\^/g, '**');
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid Expression!');
    }
}

// Enable keyboard input for calculator
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[0-9.+\-*/()%^]/.test(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }
});
