import {
  toGreetPlayer, getRandomNum, checkAnswer, getplayerAnswer, isPrimeNumber,
} from '../index.js';

const playGame = () => {
  const playerName = toGreetPlayer();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber = getRandomNum(150);
    const correctAnswer = isPrimeNumber(randomNumber);
    const playerAnswer = getplayerAnswer();
    const newCount = checkAnswer(playerAnswer, correctAnswer, playerName, counter);
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
