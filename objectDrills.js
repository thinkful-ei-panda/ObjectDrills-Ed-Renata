
'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (water / flour) * 100;
  }
};

const { flour, water, hydration } = loaf;


console.log(flour);
console.log(water);
console.log(hydration());

let haww = {
  foo: 'Hello',
  bar: 'my name is',
  fum: 29,
  quux: 'Dallas',
  spam: true
};

for (const stuff in haww) {
  console.log(`${stuff}: ${haww[stuff]}`);
};

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);

let people = [
  {
    name: 'ed',
    jobTitle: 'dev',
  },
  {
    name: 'joe',
    jobTitle: 'janitor',
  },
  {
    name: 'sharon',
    jobTitle: 'engineer',
  }
];

people.forEach(person => console.log(person));

people.forEach(element => {
  if (element.name !== 'ed') {
    element['boss'] = 'ed';
  }
});

people.forEach(person => {
  if (person['boss']) {
    console.log(`${person['jobTitle']} ${person['name']} reports to ${person['boss']}`);
  } else {
    console.log(`Founder ed doesn\'t report to anybody`);
  }
});

function jediName(firstName, lastName) {
  let first = lastName.slice(0, 3);
  let second = firstName.slice(0, 2);

  return `${first}${second}`;
}

console.log(jediName('Beyonce', 'Knowles'));

function beyond(num) {
  let message = 'Staying home';

  if (num === -Infinity || num === +Infinity) {
    message = console.log('And beyond');
  } else if (num > 0) {
    message = console.log('To infinity');
  } else if (num < 0) {
    message = console.log('To negative infinity');
  } else {
    message = console.log('Staying home');
  }
  return message;
};

beyond(0);

function decode(word) {
  let newWord = word.split(' ').map(letter => {
    if (letter[0] === 'a') {
      return letter[1];
    } else if (letter[0] === 'b') {
      return letter[2];
    } else if (letter[0] === 'c') {
      return letter[3];
    } else if (letter[0] === 'd') {
      return letter[4];
    } else {
      return ' ';
    }
  });
  return newWord;
}
console.log(decode('craft block argon meter bells brown croon droop'));

function decodedWords(word) {
  let newWord = word.split(' ').map(letter => {
    if (letter[0] === 'a') {
      return letter[1];
    } else if (letter[0] === 'b') {
      return letter[2];
    } else if (letter[0] === 'c') {
      return letter[3];
    } else if (letter[0] === 'd') {
      return letter[4];
    } else {
      return ' ';
    }
  }).join('');
  return newWord;
}
console.log(decodedWords('craft block argon meter bells brown croon droop'));


function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,

    describe() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
    },

    evaluateFight(character) {
      return `Your opponent takes ${this.attack - character.defense} and you receive ${this.defense - character.defense}`;
    }
  };
}

//data set
const characters = [
  new createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6, 'A Wizard Staff'),
  new createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'The Shire', 2, 1, 'The Ring'),
  new createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  new createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  new createCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 6, 8, 'Bow and Arrow')
];

characters.push(new createCharacter('Arwen Udomiel', 'Arwen', 'Half-Elf', 'Rivendell', 20, 20, 'Hadhafang'));


function findAragorn(characters) {
  const result = characters.find(nick => nick.nickname === 'Aragorn');

  return result.describe();
}

findAragorn(characters);


function raceHobbit(characters) {
  const result = characters.filter(hob => hob.race === 'Hobbit');

  return result;
}

console.log(raceHobbit(characters));

function aboveFive(characters) {
  const result = characters.filter(atkFive => atkFive.attack > 5);

  return result;
}

console.log(aboveFive(characters));












