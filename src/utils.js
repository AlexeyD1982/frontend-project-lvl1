const getRandomNum = (min, max) => {
  const delta = max - min + 1;
  return Math.floor(Math.random() * delta) + min;
};
export default getRandomNum;
