import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'What is the result of the expression?';

const makeOperation = (num1, num2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result += num1 + num2;
      break;
    case '-':
      result += num1 - num2;
      break;
    case '*':
      result += num1 * num2;
      break;
    default:
  }
  return result;
};

const playCalculation = () => {
  const randomNumber1 = getRandomNum(1, 50);
  const randomNumber2 = getRandomNum(1, 50);
  const operations = ['+', '-', '*'];
  const operIndex = getRandomNum(0, 2);
  const result = makeOperation(randomNumber1, randomNumber2, operations[operIndex]);
  const question = `${randomNumber1} ${operations[operIndex]} ${randomNumber2}`;
  return [question, String(result)];
};

const startGame = () => {
  playGame(playCalculation, task);
};

export default startGame;
