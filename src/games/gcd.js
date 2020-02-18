import {
  toGreetPlayer, getRandomNum, checkAnswer, getplayerAnswer, getGreatestCommonDivisor,
} from '../index.js';

const playGame = () => {
  const playerName = toGreetPlayer();
  console.log('Find the greatest common divisor of given numbers.');
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber1 = getRandomNum();
    const randomNumber2 = getRandomNum();
    const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
    const playerAnswer = Number(getplayerAnswer());
    const newCount = checkAnswer(playerAnswer, correctAnswer, playerName, counter);
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
