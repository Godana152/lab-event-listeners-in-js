
// Handle Button Clicks
const changeColorButton = document.getElementById('changeColorButton');

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');

  keyPressDisplay.textContent = 'You pressed: ' + event.key;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');

  textInputDisplay.textContent = textInput.value;
}

// Attach Event Listeners
function setupEventListeners() {

  // Change background color when button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  // Reset background color when body is double-clicked
  document.body.addEventListener('dblclick', resetBackgroundColor);

  // Display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);

  // Display user input in real-time
  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
