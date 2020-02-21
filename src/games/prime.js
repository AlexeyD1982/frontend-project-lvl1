import { playGame } from '../index.js';
import getRandomNum from '../utils.js';

const topic = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let primeNumber = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeNumber = false;
      break;
    }
  }
  return primeNumber === true ? 'yes' : 'no';
};

const prime = () => {
  const question = getRandomNum(150);
  const correctAnswer = isPrimeNumber(question);
  return [question, correctAnswer];
};

playGame(prime, topic);

export default prime;
