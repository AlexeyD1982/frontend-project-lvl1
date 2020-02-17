import readlineSync from 'readline-sync';
import toGreetPlayer from './index.js';

const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  const playerName = toGreetPlayer();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber = getRandomNum();
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    let newCount = 0;
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      newCount = counter + 1;
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
    }
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
