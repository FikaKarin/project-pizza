// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let name1 = prompt('What is your name?');

alert(`Hi, ${name1}!`);

// Step 2 - Food choice
// Your code goes here

const pi = 'Pizza';
const pa = 'Pasta';
const sa = 'Sallad';

let foodOpt = parseInt(
  prompt(
    `Insert the number of what type of food you´d like:\n1. ${pi}\n2. ${pa}\n3. ${sa}`
  )
);

if (foodOpt === 1) {
  alert('You want Pizza!');
} else if (foodOpt === 2) {
  alert('You want Pasta!');
} else if (foodOpt === 3) {
  alert('You want Sallad!');
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
