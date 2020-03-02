import readlineSync from 'readline-sync';

const playGame = (func, task) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(task);
  const doStep = (counter) => {
    if (counter >= 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const [question, correctAnswer] = func();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return doStep(0);
    }
    return doStep(counter + 1);
  };
  doStep(0);
};
export default playGame;
