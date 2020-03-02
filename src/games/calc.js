import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'What is the result of the expression?';
const mathOperators = ['+', '-', '*'];

const makeCalcOperation = (num1, num2, mathOperator) => {
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

const playCalculation = () => {
  const randomNum1 = getRandomNum(1, 50);
  const randomNum2 = getRandomNum(1, 50);
  const mathOperatorIndex = getRandomNum(0, 2);
  const correctAnswer = makeCalcOperation(randomNum1, randomNum2, mathOperators[mathOperatorIndex]);
  const question = `${randomNum1} ${mathOperators[mathOperatorIndex]} ${randomNum2}`;
  return [question, String(correctAnswer)];
};

const startGame = () => {
  playGame(playCalculation, task);
};

export default startGame;
