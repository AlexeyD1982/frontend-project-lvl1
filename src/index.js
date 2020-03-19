import readlineSync from 'readline-sync';

const numOfRounds = 3;

const runEngine = (getGameData, task) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(task);
  const doStep = (counter) => {
    if (counter >= numOfRounds) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      doStep(0);
      return;
    }
    console.log('Correct!');
    doStep(counter + 1);
  };
  doStep(0);
};
export default runEngine;
