console.log("Hello");

for (let counter = 0; counter < 5; counter++) {
  console.log("Iteration", counter);
}

//counter = 0 only read first but only once. counter < 5 is read then the programme does stuff. then  counter ++ is read back to counter < 5, does stuff, counter ++, counter < 5 etc until i = 5.

// infinite loop
// let counter1 = 1;

// while (counter1 <= 5) {
//   console.log(counter1);
//   counter1++;
// }

// let keepLooping = true;
// let i = 0;
// while (keepLooping === true) {
//   console.log("Iteration", i);
// }

//The above is an infinite loop and fucks the laptop!

//Looping over Arrays

let videoGames = ["snake", "cod", "tetris"];

for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// tend to use i as shorthand for counter

const foods = ["pasta", "pizza", "curry", "japanese", "cheese"];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

//easier way to do loops

let sports = ["football", "basketball", "running", "skiing"];

//for loops but simpler, we dont see i/counter!

for (let sport of sports) {
  console.log(sport);
}
// simpler but has less control. less specific. if you need to select an index, this won't be as useful.

//another way - 'loop methods'
let chocolate = ["white", "milk", "dark"];
// forEach, something called a callback function
chocolate.forEach(function (individualChocolate) {
  console.log(individualChocolate);
});

let favAnimals = ["Octopus", "Dog", "Cat", "Penguin", "Elephant"];

for (let i = 0; i < favAnimals.length; i++) {
  console.log(favAnimals[i]);
}

let favNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

for (let i = 0; i < favNumbers.length; i++) {
  console.log(favNumbers[i]);
}
//will output all numbers

for (let i = 0; i < favNumbers[3]; i++) {
  console.log(favNumbers[i]);
}
//will output upto index 3. console will show 1 2 3 4
