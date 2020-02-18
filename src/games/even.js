import {
  toGreetPlayer, getRandomNum, isEven, checkAnswer, getplayerAnswer,
} from '../index.js';

const playGame = () => {
  const playerName = toGreetPlayer();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber = getRandomNum();
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = getplayerAnswer();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const newCount = checkAnswer(playerAnswer, correctAnswer, playerName, counter);
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
