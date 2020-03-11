import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGreatestCommonDivisor(number2, number1 % number2);
};

const genGCDGame = () => {
  const randomNumber1 = getRandomNum(1, 50);
  const randomNumber2 = getRandomNum(1, 50);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [question, String(correctAnswer)];
};

const startGame = () => {
  playGame(genGCDGame, task);
};

export default startGame;
