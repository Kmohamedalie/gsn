'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;


// set a sound for win
const win = document.createElement("audio");
win.src = "Game-Win.mp3";
// set a sound for lose
const lose = document.createElement("audio");
lose.src = "Game-Over.mp3";
// set a sound select sound
const select = document.createElement("audio");
select.src = "select.mp3";




// default score
let score = 10;
// high score
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  select.play();
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    // change the guessing message
    displayMessage('🎉Correct Number🏆!');
    // display secret number when the player gets the number
    document.querySelector('.number').textContent = secretNumber;
    // color the background green when the guess is successful
    document.querySelector('body').style.backgroundColor = '#60b347';
    // increase the number
    document.querySelector('.number').style.width = '30rem';
    // sound game win
    win.play();

    // if current score is higher than highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is too high or low (REFACTORED CODE)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // conditional ternary
      displayMessage(guess > secretNumber ? 'Too high 👆!' : 'Too low 👇!');
      // deduct 1 from the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // lose message
      displayMessage('💥 You lost the game!');
      // the secret number
      // display secret number when the player gets the number
      document.querySelector('.number').textContent = '😜';
      document.querySelector('.score').textContent = 0;
      // sound game over
      //let beat = new Audio('https://github.com/Kmohamedalie/gsn/blob/master/Game-Over.mp3');
      //beat.play();
      lose.play();
    }
  }
});
/*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 👆!';
      // deduct 1 from the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // lose message
      document.querySelector('.message').textContent = '💥 You lost the game!';
      // the secret number
      // display secret number when the player gets the number
      document.querySelector('.number').textContent = '😜';
      document.querySelector('.score').textContent = 0;
      // sound game over
      let beat = new Audio('Game-Over.mp3');
      beat.play();
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 👇!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // lose message
      document.querySelector('.message').textContent = '💥 You lost the game!';
      // display secret number when the player gets the number
      document.querySelector('.number').textContent = '😜';
      document.querySelector('.score').textContent = 0;
      // sound game over
      let beat = new Audio('Game-Over.mp3');
      beat.play();
    }
  }*/

// PLAY AGAIN LOGIC
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  select.play();
  // secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
