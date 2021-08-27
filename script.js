const guess = document.querySelector('#guess');
const submit = document.querySelector('#submit');
const form = document.querySelector('.form');
const guessNumber = document.querySelector('.guessNumber');
const guessRemaining = document.querySelector('.guessRemaining');
const lowOrHigh = document.querySelector('.lowOrHigh');

let guesses = 10;
let random = Math.floor(Math.random() * 101);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let number = parseInt(guess.value);

  validateGuess(number);
  guess.value = '';
});

function validateGuess(number) {
  if (guesses > 0) {
    if (number === random) {
      lowOrHigh.textContent = 'You guessed the number!';
      console.log(number);
    } else if (number > random) {
      lowOrHigh.textContent = 'Too High! Please try again.';
    } else {
      lowOrHigh.textContent = 'Too Low! Please try again.';
    }

    guessNumber.textContent = number;
    guesses--;
    guessRemaining.textContent = guesses;
  }

  if (guesses === 0) {
    lowOrHigh.textContent = `You have not guessed the number. The number is ${random}!`;
  }
}
