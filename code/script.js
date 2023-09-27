// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
let name1 = prompt('What is your name?');
alert(`Hi, ${name1}!`);

// Step 2 - Food choice
const pi = 'Pizza';
const pa = 'Pasta';
const sa = 'Salad';

let foodOpt = parseInt(
  prompt(
    `Insert the number of what type of food you'd like:\n1. ${pi}\n2. ${pa}\n3. ${sa}`
  )
);

if (foodOpt === 1) {
  alert('You want Pizza!');
} else if (foodOpt === 2) {
  alert('You want Pasta!');
} else if (foodOpt === 3) {
  alert('You want Salad!');
}

// Step 3 - Subtype choice
let caprisciosa = 'Caprisciosa';
let calzone = 'Calzone';
let hawaii = 'Hawaii';
let carbonara = 'Carbonara';
let bolognese = 'Bolognese';
let lasagna = 'Lasagna';
let ceasar = 'Caesar';
let greek = 'Greek';
let schrimp = 'Shrimp';

if (foodOpt === 1) {
  let pizzaChoice = prompt(
    `Please answer what type of meal you want\n1. ${caprisciosa}\n2. ${calzone}\n3. ${hawaii}\nWrite number in input field below:`
  );

  if (pizzaChoice === '1') {
    alert(`You want ${caprisciosa}`);
  } else if (pizzaChoice === '2') {
    alert(`You want ${calzone}`);
  } else if (pizzaChoice === '3') {
    alert(`You want ${hawaii}`);
  } else {
    alert('Invalid food option. Please choose 1, 2, or 3.');
  }
} else if (foodOpt === 2) {
  let pastaChoice = prompt(
    `Please answer what type of meal you want\n1. ${carbonara}\n2. ${bolognese}\n3. ${lasagna}\n\nWrite number in input field below:\n`
  );

  if (pastaChoice === '1') {
    alert(`You want ${carbonara}`);
  } else if (pastaChoice === '2') {
    alert(`You want ${bolognese}`);
  } else if (pastaChoice === '3') {
    alert(`You want ${lasagna}`);
  } else {
    alert('Invalid food option. Please choose 1, 2, or 3.');
  }
} else if (foodOpt === 3) {
  let saladChoice = prompt(
    `Please answer what type of meal you want\n1. ${ceasar}\n2. ${greek}\n3. ${schrimp}\n\nWrite number in input field below:\n`
  );

  if (saladChoice === '1') {
    alert(`You want ${ceasar}`);
  } else if (saladChoice === '2') {
    alert(`You want ${greek}`);
  } else if (saladChoice === '3') {
    alert(`You want ${schrimp}`);
  } else {
    alert('Invalid food option. Please choose 1, 2, or 3.');
  }
}

// Step 4 - Age
const adult = 'Adult';
const child = 'Child';
const adultPrize = 120;
const childPrize = 90;

let size = prompt(
  `Choose size of meal:\n1. ${adult} (${adultPrize} SEK)\n2. ${child} (${childPrize} SEK)\n\nWrite number in input field below:\n`
);

if (size === '1') {
  alert(`You want to order a full-size meal! That'll be ${adultPrize} SEK.`);
} else if (size === '2') {
  alert(`You want to order a child-size meal! That'll be ${childPrize} SEK.`);
}

let confirmation = prompt(
  `Do you confirm this order?\n1. Yes\n2. No\n\nWrite number in input field below:\n`
);

// Step 5 - Order confirmation
// Your code goes here
