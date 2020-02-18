import readlineSync from 'readline-sync';

export const getPlayerName = () => {
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

export const getplayerAnswer = () => readlineSync.question('Your answer: ');

export const isEven = (num) => num % 2 === 0;

export const checkAnswer = (playerAnswer, correctAnswer, playerName, counter) => {
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

const sum = (num1, num2) => {
  console.log(`Question: ${num1} + ${num2}`);
  return num1 + num2;
};

const diff = (num1, num2) => {
  console.log(`Question: ${num1} - ${num2}`);
  return num1 - num2;
};

const multi = (num1, num2) => {
  console.log(`Question: ${num1} * ${num2}`);
  return num1 * num2;
};

export const getRamdomOperation = (number1, number2) => {
  const operations = [sum, diff, multi];
  const operIndex = Math.floor(Math.random() * 3);
  return operations[operIndex](number1, number2);
};

export const getGreatestCommonDivisor = (number1, number2) => {
  console.log(`Question: ${number1} ${number2}`);
  const maxDivisor = number1 <= number2 ? number1 : number2;
  let result = maxDivisor;
  for (let i = maxDivisor; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

export const progression = (firstNum, increment) => {
  const array = [firstNum];
  for (let i = 1; i < 10; i += 1) {
    array.push(array[i - 1] + increment);
  }
  const randomIndex = getRandomNum(9);
  const result = array[randomIndex];
  array[randomIndex] = '..';
  console.log(`Question: ${array.join(' ')}`);
  return result;
};

export const isPrimeNumber = (number) => {
  console.log(`Question: ${number}`);
  let primeNumber = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeNumber = false;
      break;
    }
  }
  return primeNumber === true ? 'yes' : 'no';
};
