
// 1. Change background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'rgb(0, 128, 0)';
}

// 2. Reset background color
function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
}

// 3. Display key pressed
function displayKeyPress(event) {
    const keyPressDisplay = document.getElementById('keyPressDisplay');

    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

// 4. Display user input
function displayUserInput() {
    const textInput = document.getElementById('textInput');
    const textInputDisplay = document.getElementById('textInputDisplay');

    textInputDisplay.textContent = `You typed: ${textInput.value}`;
}

// 5. Setup event listeners
function setupEventListeners() {
    const changeColorButton = document.getElementById('changeColorButton');
    const resetColorButton = document.getElementById('resetColorButton');
    const textInput = document.getElementById('textInput');

    if (changeColorButton) {
        changeColorButton.addEventListener('click', changeBackgroundColor);
    }

    if (resetColorButton) {
        resetColorButton.addEventListener('dblclick', resetBackgroundColor);
    }

    document.addEventListener('keydown', displayKeyPress);

    if (textInput) {
        textInput.addEventListener('input', displayUserInput);
    }
}

// 6. Initialize event listeners
if (typeof document !== 'undefined') {
    setupEventListeners();
}

// 7. Export functions
module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners
};




