import readlineSync from 'readline-sync';

const checkAnswer = (playerAnswer, correctAnswer, playerName, counter) => {
  let newCount = 0;
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    newCount = counter + 1;
  } else {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${playerName}!`);
  }
  return newCount;
};

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
    const newCount = checkAnswer(playerAnswer, correctAnswer, playerName, counter);
    return doStep(newCount);
  };
  doStep(0);
};
export default playGame;
