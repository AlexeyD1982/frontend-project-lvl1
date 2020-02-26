import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeNumber = false;
      break;
    }
  }
  return primeNumber;
};

const playPrimeNumber = () => {
  const question = getRandomNum(1, 150);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  playGame(playPrimeNumber, task);
};

export default startGame;
