import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const genGameData = () => {
  const question = getRandomNum(1, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

const startGame = () => {
  runEngine(genGameData, task);
};

export default startGame;
