const MagicNumberGame = require('./MagicNumberGame');

// Create a game from 0 to 100
let lowerBound = 0;
let upperBound = 100;
const game1 = new MagicNumberGame(upperBound);
console.log(`Magic Number: ${game1.magicNumber}`);

// guess from 1 to magicNumber
let i, count;
for (i = lowerBound, count = 1; i < upperBound; i = Math.floor((upperBound + lowerBound) / 2), count++) {
    const attempt = i;
    console.log(`Attempt ${count}: ${attempt}`);
    const progress = game1.guess(attempt);
    lowerBound = progress[0];
    upperBound = progress[1];
}

// Check that the final i value is indeed the magicNumber
if (i === game1.magicNumber) {
    console.log(`SUCCESS! Magic Number: ${game1.magicNumber}, Number of attempts: ${count - 1}`);
} else {
    console.log(`ERROR! Something went wrong! Magic Number: ${game1.magicNumber}, Last attempt: ${i}`);
}
