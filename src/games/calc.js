import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const task = 'What is the result of the expression?';
const mathOperators = ['+', '-', '*'];

const calculate = (num1, num2, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const genGameData = () => {
  const randomNum1 = getRandomNum(1, 50);
  const randomNum2 = getRandomNum(1, 50);
  const mathOperator = mathOperators[mathOperators.length - 1];
  const correctAnswer = calculate(randomNum1, randomNum2, mathOperator);
  const question = `${randomNum1} ${mathOperator} ${randomNum2}`;
  return [question, String(correctAnswer)];
};

const startGame = () => {
  runEngine(genGameData, task);
};

export default startGame;
