const isFive = (value) => {
  return value === 5;
};
const isOdd = (value) => {
  if (typeof value !== 'number') throw new Error();
  return value % 2 !== 0;
};
const myRange = (min, max, step) => {
  if (min > max) return [];
  let arr = [];
  if (step) {
    for (; min <= max; min += step) {
      arr.push(min);
    }
  } else {
    for (; min <= max; min++) {
      arr.push(min);
    }
  }

  return arr;
};
module.exports = {
  isFive,
  isOdd,
  myRange,
};
