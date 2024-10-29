// This script generates a gallery of Pokemon images using sprites from the PokeAPI.

// Select the container element where the Pokemon images will be appended.
const container = document.querySelector('#container');

// Define t he base URL for fetching Pokemon sprite images.
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// Loop through the first 151 Pokemon (from 1 to 151).
for (let i = 1; i <= 151; i++) {
    // Create a new div element to hold each Pokemon's image and label.
    const pokemon = document.createElement('div');
    // Add a class 'pokemon' to the div for styling purposes.
    pokemon.classList.add('pokemon');

    // Create a span element to display the Pokemon's number.
    const label = document.createElement('span');
    // Set the inner text of the span to the Pokemon's number (e.g., #1, #2, etc.).
    label.innerText = `#${i}`;

    // Create an img element to display the Pokemon's sprite.
    const newImg = document.createElement('img');
    // Set the source of the img element to the corresponding sprite URL.
    newImg.src = `${baseURL}${i}.png`;

    // Append the image and label to the Pokemon container div.
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    
    // Append the Pokemon container div to the main container in the HTML.
    container.appendChild(pokemon);
}
