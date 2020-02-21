import {
  getRandomNum, playGame,
} from '../index.js';

const isEven = (num) => num % 2 === 0;
const topic = 'Answer "yes" if the number is even, otherwise answer "no"';

const even = () => {
  const question = getRandomNum(50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

playGame(even, topic);

export default even;
