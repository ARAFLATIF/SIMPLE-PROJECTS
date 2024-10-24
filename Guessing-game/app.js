// Get the maximum number from the user and ensure it's a valid number
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// Generate a random target number between 1 and the maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;

// Get the user's first guess
let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1; // Initialize the attempts counter

// Game loop: continue until the user guesses correctly or quits
while (parseInt(guess)!== targetNum) {
    // Check if the user wants to quit
    if (guess === 'q') break;

    // Parse the guess to a number
    guess = parseInt(guess);

    // Provide feedback based on the guess
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++; // Increment attempts
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++; // Increment attempts
    } else {
        // Handle invalid input (not a number or not 'q')
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

// Determine and display the game outcome
if (guess === 'q') {
    console.log("OK, YOU QUIT!");
} else {
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
