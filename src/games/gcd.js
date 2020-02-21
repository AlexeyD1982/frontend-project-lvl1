import {
  getRandomNum, playGame,
} from '../index.js';

const topic = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  const maxDivisor = number1 <= number2 ? number1 : number2;
  let result = maxDivisor;
  for (let i = maxDivisor; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const gcd = () => {
  const randomNumber1 = getRandomNum(50);
  const randomNumber2 = getRandomNum(50);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

playGame(gcd, topic);

export default gcd;
