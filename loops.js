console.log("Hello");

for (let counter = 0; counter < 5; counter++) {
  console.log("Iteration", counter);
}

// let counter1 = 1;

// while (counter1 <= 5) {
//   console.log(counter1);
//   counter1++;
// }

// let keepLooping = false;
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

const foods = ["pasta", "pizza", "curry", "japanese", "cheese"];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}
