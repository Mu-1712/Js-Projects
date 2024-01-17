//Number Gussing game
    // Number Guessing Game with while loop and no separate functions

// Set the range for the random number
const minNumber = 1;
const maxNumber = 100;

// Generate a random number between minNumber and maxNumber
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Initialize game variables
let attempts = 0;
let isGameOver = false;

// Welcome message
alert(`Welcome to the Number Guessing Game!\nTry to guess the number between ${minNumber} and ${maxNumber}.`);

// Game loop
while (!isGameOver) {
    // Get user input
    let userGuess = prompt(`Enter your guess:`);

    // Check if the user clicked the "Cancel" button
    if (userGuess === null) {
        alert("Game canceled. Thanks for playing!");
        isGameOver = true;
    } else {
        // Convert the user input to a number
        userGuess = parseInt(userGuess);

        // Check if the input is a valid number
        if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
            alert(`Please enter a valid number between ${minNumber} and ${maxNumber}.`);
        } else {
            // Increment the attempts counter
            attempts++;

            // Check if the guess is correct
            if (userGuess === randomNumber) {
                alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
                isGameOver = true;
            } else {
                // Provide feedback on the guess
                let message = userGuess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
                alert(message);
            }
        }
    }
}
