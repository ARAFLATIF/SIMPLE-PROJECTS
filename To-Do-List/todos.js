/**
 * Simple To-Do List Application
 *
 * This application allows users to manage a simple to-do list through a command-line interface.
 * Users can list current tasks, add new tasks, delete existing tasks, and quit the application.
 */

// Initialize the input variable by prompting the user for an action
let input = prompt('What would you like to do?');

// Initialize the to-do list with some default tasks
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

// Main loop that continues until the user decides to quit
while (input !== 'quit' && input !== 'q') {
    // Check if the user wants to list all to-dos
    if (input === 'list') {
        console.log('*****************');
        // Loop through the to-do list and display each item with its index
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************');
    } 
    // Check if the user wants to add a new to-do
    else if (input === 'new') {
        // Prompt the user for a new task and add it to the list
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } 
    // Check if the user wants to delete a to-do
    else if (input === 'delete') {
        // Prompt the user for an index of the task to be deleted
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        // Verify that the input is a valid number and within range
        if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
            // Remove the task at the specified index and display confirmation
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    // Prompt the user again for an action after completing one iteration of the loop
    input = prompt('What would you like to do?');
}

// Display a message when the user quits the application
console.log('OK QUIT THE APP!');



//Functionality Overview
// Initialization: The application starts by prompting the user for an action and initializes a simple array of default tasks (todos).
// Main Loop: The loop continues until the user inputs 'quit' or 'q'. Within this loop:
// List Tasks: If the user inputs 'list', it displays all current tasks with their indices.
// Add New Task: If 'new' is entered, it prompts for a new task description and adds it to the todos array.
// Delete Task: If 'delete' is entered, it prompts for an index. It deletes the task at that index if valid.
// Exit: When 'quit' or 'q' is entered, it exits the loop and prints a goodbye message.
// Key Points
// User Input: The application relies on prompt() for input, which works in environments that support this function (e.g., browsers).
// Array Operations: It uses push() to add items and splice() to remove items from todos.
// Input Validation: It checks whether deletion indices are valid numbers within array bounds before attempting deletion.
