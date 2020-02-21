import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const toGreetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const getRandomNum = (maxNumber) => Math.floor(Math.random() * maxNumber) + 1;

const checkAnswer = (playerAnswer, correctAnswer, playerName, counter) => {
  let newCount = 0;
  if (playerAnswer === String(correctAnswer)) {
    console.log('Correct!');
    newCount = counter + 1;
  } else {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${playerName}!`);
  }
  return newCount;
};

export const playGame = (func, topic) => {
  const playerName = toGreetPlayer();
  console.log(topic);
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
