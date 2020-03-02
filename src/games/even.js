import playGame from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const playEven = () => {
  const question = getRandomNum(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  playGame(playEven, task);
};

export default startGame;
