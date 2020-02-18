import {
  toGreetPlayer, getRandomNum, checkAnswer, getplayerAnswer, getRamdomOperation,
} from '../index.js';

const playGame = () => {
  const playerName = toGreetPlayer();
  console.log('What is the result of the expression?');
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber1 = getRandomNum(50);
    const randomNumber2 = getRandomNum(50);
    const correctAnswer = getRamdomOperation(randomNumber1, randomNumber2);
    const playerAnswer = Number(getplayerAnswer());
    const newCount = checkAnswer(playerAnswer, correctAnswer, playerName, counter);
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
