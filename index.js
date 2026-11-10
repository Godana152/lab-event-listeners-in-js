

// 1. Access HTML elements
const changeColorButton = document.getElementById('changeColorButton');
const resetColorButton = document.getElementById('resetColorButton');
const keyPressDisplay = document.getElementById('keyPressDisplay');
const textInput = document.getElementById('textInput');
const textInputDisplay = document.getElementById('textInputDisplay');


// 2. Change background color when button is clicked
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}


// 3. Reset background color when button is double-clicked
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}


// 4. Display the key pressed by the user
function displayKeyPress(event) {
    keyPressDisplay.textContent = `You pressed: ${event.key}`;
}


// 5. Display user input in real time
function displayUserInput() {
    textInputDisplay.textContent = `You typed: ${textInput.value}`;
}


// 6. Attach event listeners

// Single click changes background color
changeColorButton.addEventListener('click', changeBackgroundColor);

// Double click resets background color
resetColorButton.addEventListener('dblclick', resetBackgroundColor);

// Detect keyboard key presses
document.addEventListener('keydown', displayKeyPress);

// Display text as the user types
textInput.addEventListener('input', displayUserInput);



