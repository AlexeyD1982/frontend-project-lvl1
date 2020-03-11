import playGame from '../index.js';
import getRandomNum from '../utils.js';

const task = 'What number is missing in the progression?';

const makeProgression = (firstNumber, step, progressionLength) => {
  const progression = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const genProgressionGame = () => {
  const progressionLength = 10;
  const firstMember = getRandomNum(1, 50);
  const step = getRandomNum(1, 5);
  const progression = makeProgression(firstMember, step, progressionLength);
  const randomIndex = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), String(correctAnswer)];
};

const startGame = () => {
  playGame(genProgressionGame, task);
};

export default startGame;
