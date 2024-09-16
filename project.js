// Function to append the clicked button's value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate and display the result
function calculate() {
    let display = document.getElementById('display').value;
    try {
        let result = eval(display);  // Evaluate the arithmetic expression
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';  // Handle invalid input
    }
}