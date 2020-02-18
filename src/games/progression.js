import {
  toGreetPlayer, getRandomNum, checkAnswer, getplayerAnswer, progression,
} from '../index.js';

const playGame = () => {
  const playerName = toGreetPlayer();
  console.log('What number is missing in the progression?');
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber = getRandomNum(50);
    const increment = getRandomNum(5);
    const correctAnswer = progression(randomNumber, increment);
    const playerAnswer = Number(getplayerAnswer());
    const newCount = checkAnswer(playerAnswer, correctAnswer, playerName, counter);
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
