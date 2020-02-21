import { playGame } from '../index.js';
import getRandomNum from '../utils.js';

const topic = 'What number is missing in the progression?';

const progression = (firstNum, increment) => {
  const array = [firstNum];
  for (let i = 1; i < 10; i += 1) {
    array.push(array[i - 1] + increment);
  }
  const randomIndex = getRandomNum(9);
  const result = array[randomIndex];
  array[randomIndex] = '..';
  return [array.join(' '), result];
};

const playProgression = () => {
  const randomNumber = getRandomNum(50);
  const increment = getRandomNum(5);
  return progression(randomNumber, increment);
};

playGame(playProgression, topic);

export default playProgression;
