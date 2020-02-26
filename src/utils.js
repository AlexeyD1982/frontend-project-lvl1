const getRandomNum = (minNumber, maxNumber) => {
  const delta = maxNumber - minNumber + 1;
  return Math.floor(Math.random() * delta) + minNumber;
};
export default getRandomNum;
