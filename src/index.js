import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const toGreetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export default toGreetPlayer;
