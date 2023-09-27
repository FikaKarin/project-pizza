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

let foodOpt;

while (true) {
  foodOpt = parseInt(
    prompt(
      `Insert the number of what type of food you'd like:\n1. ${pi}\n2. ${pa}\n3. ${sa}`
    )
  );

  if (foodOpt >= 1 && foodOpt <= 3) {
    break;
  } else {
    alert('Invalid food option. Please choose 1, 2, or 3.');
  }
}

switch (foodOpt) {
  case 1:
    alert(`You want ${pi}!`);
    break;
  case 2:
    alert(`You want ${pa}!`);
    break;
  case 3:
    alert(`You want ${sa}!`);
    break;
}

// Step 3 - Subtype choice
let pizzaChoice = '';
let pastaChoice = '';
let saladChoice = '';

function getMenuChoice(menu, choiceText) {
  let choice = '';
  while (true) {
    choice = prompt(
      `Please answer what type of meal you want\n1. ${menu[0]}\n2. ${menu[1]}\n3. ${menu[2]}\n\nWrite number in input field below:`
    );

    if (choice === '1' || choice === '2' || choice === '3') {
      choice = menu[parseInt(choice) - 1];
      alert(`You want ${choice}`);
      break;
    } else {
      alert(`Invalid ${choiceText} option. Please choose 1, 2, or 3.`);
    }
  }
  return choice;
}

if (foodOpt === 1) {
  const pizzaMenu = ['Caprisciosa', 'Calzone', 'Hawaii'];
  pizzaChoice = getMenuChoice(pizzaMenu, 'pizza');
} else if (foodOpt === 2) {
  const pastaMenu = ['Carbonara', 'Bolognese', 'Lasagna'];
  pastaChoice = getMenuChoice(pastaMenu, 'pasta');
} else if (foodOpt === 3) {
  const saladMenu = ['Caesar', 'Greek', 'Shrimp'];
  saladChoice = getMenuChoice(saladMenu, 'salad');
}

// Step 4 - Age
const adult = 'Adult';
const child = 'Child';
const adultPrize = 120;
const childPrize = 90;

let size;

while (true) {
  size = prompt(
    `Choose size of meal:\n1. ${adult} (${adultPrize} SEK)\n2. ${child} (${childPrize} SEK)\n\nWrite number in input field below:`
  );

  if (size === '1' || size === '2') {
    break;
  } else {
    alert('Invalid size option. Please choose 1 for Adult or 2 for Child.');
  }
}

let sizeChoice = '';
let sizePrice = 0;

switch (size) {
  case '1':
    sizeChoice = adult;
    sizePrice = adultPrize;
    alert(`You want to order a full-size meal! That'll be ${adultPrize} SEK.`);
    break;
  case '2':
    sizeChoice = child;
    sizePrice = childPrize;
    alert(`You want to order a child-size meal! That'll be ${childPrize} SEK.`);
    break;
}

// Step 5 - Order confirmation
let confirmationMessage = `Confirmation of Your Order:\n\n`;
confirmationMessage += `Name: ${name1}\n`;

switch (foodOpt) {
  case 1:
    confirmationMessage += `Food Choice: ${pi}\n`;
    confirmationMessage += `Pizza Choice: ${pizzaChoice}\n`;
    break;
  case 2:
    confirmationMessage += `Food Choice: (${pa}\n`;
    confirmationMessage += `Pasta Choice: ${pastaChoice}\n`;
    break;
  case 3:
    confirmationMessage += `Food Choice: ${sa}\n`;
    confirmationMessage += `Salad Choice: ${saladChoice}\n`;
    break;
}

confirmationMessage += `Meal Size: ${sizeChoice} (Price: ${sizePrice} SEK)\n`;

while (true) {
  let confirmation = prompt(
    `${confirmationMessage}\nDo you confirm this order?\n1. Yes\n2. No\n\nWrite number in the input field below:\n`
  );

  if (confirmation === '1' || confirmation === '2') {
    if (confirmation === '1') {
      alert(
        `Thank you, ${name1}! Your meal will be prepared. Thank you for your order!`
      );
    } else if (confirmation === '2') {
      alert(
        `Sorry to see you go, ${name1}! We hope to see you again for your future orders.`
      );
    }
    break;
  } else {
    alert('Invalid option. Please choose 1 for Yes or 2 for No.');
  }
}
