function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid input");
        }

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        console.error("Error:", error.message);
    }
}
