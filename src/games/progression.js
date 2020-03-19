import runEngine from '../index.js';
import getRandomNum from '../utils.js';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (firstNumber, step) => {
  const progression = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const genGameData = () => {
  const firstMember = getRandomNum(1, 50);
  const step = getRandomNum(1, 5);
  const progression = makeProgression(firstMember, step);
  const randomIndex = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  runEngine(genGameData, task);
};

export default startGame;
