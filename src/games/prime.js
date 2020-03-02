import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const question = getRandomNum(1, 150);
  const correctAnswer = checkPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  playGame(playPrime, task);
};

export default startGame;
