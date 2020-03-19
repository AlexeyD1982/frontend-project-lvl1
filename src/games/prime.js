import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const question = getRandomNum(1, 150);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

const startGame = () => {
  runEngine(genGameData, task);
};

export default startGame;
