import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'What number is missing in the progression?';

const makeProgression = (firstNum, increment) => {
  const array = [firstNum];
  for (let i = 1; i < 10; i += 1) {
    array.push(array[i - 1] + increment);
  }
  const randomIndex = getRandomNum(0, 9);
  const correctAnswer = array[randomIndex];
  array[randomIndex] = '..';
  return [array.join(' '), String(correctAnswer)];
};

const playProgression = () => {
  const randomNumber = getRandomNum(1, 50);
  const increment = getRandomNum(1, 5);
  return makeProgression(randomNumber, increment);
};

const startGame = () => {
  playGame(playProgression, task);
};

export default startGame;
