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
let caprisciosa = 'Caprisciosa';
let calzone = 'Calzone';
let hawaii = 'Hawaii';
let carbonara = 'Carbonara';
let bolognese = 'Bolognese';
let lasagna = 'Lasagna';
let ceasar = 'Ceasar';
let greek = 'Greek';
let schrimp = 'Schrimp';

if (foodOpt === '1') {
  let pizzaChoice = 
    prompt(
      `Please answer what type of meal you want\n1. ${caprisciosa}\n2. ${calzone}\n3. ${hawaii}`
    );

  if (pizzaChoice === '1') {
    alert(`You want ${caprisciosa}`);
  } else if (pizzaChoice === '2') {
    alert(`You want ${calzone}`);
  } else if (pizzaChoice === '3') {
    alert(`You want ${hawaii}`);
  }
} else if (foodOpt === '2') {
  let pastaChoice = prompt(
    `Please answer what type of meal you want\n1. ${carbonara}\n2. ${bolognese}\n3. ${lasagna}`
  );

  if (pastaChoice === '1') {
    alert(`You want ${carbonara}`);
  } else if (pizzaChoice === '2') {
    alert(`You want ${bolognese}`);
  } else if (pizzaChoice === '3') {
    alert(`You want ${lasagna}`);
  }
  
} else if (foodOpt === '3') {
  let salladChoice = prompt(
    `Please answer what type of meal you want\n1. ${ceasar}\n2. ${greek}\n3. ${schrimp}`
  );

  if (salladChoice === 1) {
    alert(`You want ${ceasar}`);
  } else if (salladChoice === '2') {
    alert(`You want ${greek}`);
  } else if (salladChoice === '3') {
    alert(`You want ${schrimp}`);
  } else {
    alert(`Invalid choice for salad: ${salladChoice}`);
  }
} else {
  alert('Invalid food option. Please choose 1, 2, or 3.');
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
