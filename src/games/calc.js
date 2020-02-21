import {
  getRandomNum, playGame,
} from '../index.js';

const topic = 'What is the result of the expression?';

const calc = () => {
  const randomNumber1 = getRandomNum(50);
  const randomNumber2 = getRandomNum(50);
  const operations = ['sum', 'diff', 'multi'];
  const operIndex = Math.floor(Math.random() * 3);
  let result = [];
  let question = '';
  switch (operations[operIndex]) {
    case 'sum':
      question = `${randomNumber1} + ${randomNumber2}`;
      return [question, randomNumber1 + randomNumber2];
      break;
    case 'diff':
      question = `${randomNumber1} - ${randomNumber2}`;
      return [question, randomNumber1 - randomNumber2];
      break;
    case 'multi':
      question = `${randomNumber1} * ${randomNumber2}`;
      return [question, randomNumber1 * randomNumber2];
      break;
  }
};

playGame(calc, topic);

export default calc;
