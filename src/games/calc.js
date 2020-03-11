import playGame from '../index.js';
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

const genCalculationGame = () => {
  const randomNum1 = getRandomNum(1, 50);
  const randomNum2 = getRandomNum(1, 50);
  const mathOperatorIndex = getRandomNum(0, 2);
  const selectedMathOperator = mathOperators[mathOperatorIndex];
  const correctAnswer = calculate(randomNum1, randomNum2, selectedMathOperator);
  const question = `${randomNum1} ${selectedMathOperator} ${randomNum2}`;
  return [question, String(correctAnswer)];
};

const startGame = () => {
  playGame(genCalculationGame, task);
};

export default startGame;
