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

let pizzaChoice = '';
let pastaChoice = '';
let saladChoice = '';

if (foodOpt === 1) {
  while (true) {
    pizzaChoice = prompt(
      `Please answer what type of meal you want\n1. ${caprisciosa}\n2. ${calzone}\n3. ${hawaii}\nWrite number in input field below:`
    );

    if (pizzaChoice === '1' || pizzaChoice === '2' || pizzaChoice === '3') {
      if (pizzaChoice === '1') {
        pizzaChoice = caprisciosa;
      } else if (pizzaChoice === '2') {
        pizzaChoice = calzone;
      } else if (pizzaChoice === '3') {
        pizzaChoice = hawaii;
      }
      alert(`You want ${pizzaChoice}`);
      break;
    } else {
      alert('Invalid food option. Please choose 1, 2, or 3.');
    }
  }
} else if (foodOpt === 2) {
  while (true) {
    pastaChoice = prompt(
      `Please answer what type of meal you want\n1. ${carbonara}\n2. ${bolognese}\n3. ${lasagna}\n\nWrite number in input field below:\n`
    );

    if (pastaChoice === '1' || pastaChoice === '2' || pastaChoice === '3') {
      if (pastaChoice === '1') {
        pastaChoice = carbonara;
      } else if (pastaChoice === '2') {
        pastaChoice = bolognese;
      } else if (pastaChoice === '3') {
        pastaChoice = lasagna;
      }
      alert(`You want ${pastaChoice}`);
      break;
    } else {
      alert('Invalid food option. Please choose 1, 2, or 3.');
    }
  }
} else if (foodOpt === 3) {
  while (true) {
    saladChoice = prompt(
      `Please answer what type of meal you want\n1. ${ceasar}\n2. ${greek}\n3. ${schrimp}\n\nWrite number in input field below:\n`
    );

    if (saladChoice === '1' || saladChoice === '2' || saladChoice === '3') {
      if (saladChoice === '1') {
        saladChoice = ceasar;
      } else if (saladChoice === '2') {
        saladChoice = greek;
      } else if (saladChoice === '3') {
        saladChoice = schrimp;
      }
      alert(`You want ${saladChoice}`);
      break;
    } else {
      alert('Invalid food option. Please choose 1, 2, or 3.');
    }
  }
}

// Step 4 - Age
const adult = 'Adult';
const child = 'Child';
const adultPrize = 120;
const childPrize = 90;

let size;

while (true) {
  size = prompt(
    `Choose size of meal:\n1. ${adult} (${adultPrize} SEK)\n2. ${child} (${childPrize} SEK)\n\nWrite number in input field below:\n`
  );

  if (size === '1' || size === '2') {
    break;
  } else {
    alert('Invalid size option. Please choose 1 for Adult or 2 for Child.');
  }
}

let sizeChoice = '';
let sizePrice = 0;

if (size === '1') {
  sizeChoice = adult;
  sizePrice = adultPrize;
  alert(`You want to order a full-size meal! That'll be ${adultPrize} SEK.`);
} else if (size === '2') {
  sizeChoice = child;
  sizePrice = childPrize;
  alert(`You want to order a child-size meal! That'll be ${childPrize} SEK.`);
}

// Step 5 - Order confirmation
let confirmationMessage = `Confirmation of Your Order:\n\n`;
confirmationMessage += `Name: ${name1}\n`;

if (foodOpt === 1) {
  confirmationMessage += `Food Choice: ${pi}\n`;
  confirmationMessage += `Pizza Choice: ${pizzaChoice}\n`;
} else if (foodOpt === 2) {
  confirmationMessage += `Food Choice: ${pa}\n`;
  confirmationMessage += `Pasta Choice: ${pastaChoice}\n`;
} else if (foodOpt === 3) {
  confirmationMessage += `Food Choice: ${sa}\n`;
  confirmationMessage += `Salad Choice: ${saladChoice}\n`;
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
