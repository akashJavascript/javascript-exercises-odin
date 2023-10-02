const fibonacci = function (numInSequence) {
  if (numInSequence < 0) {
    return 'OOPS';
  }
  numInSequence = Number(numInSequence);
  let fibonacciSeries = [];
  let n1 = 0;
  let n2 = 1;
  let nextNum;
  fibonacciSeries.push(1);
  for (let i = 1; i <= numInSequence; i++) {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    fibonacciSeries.push(nextNum);
  }
  return fibonacciSeries[numInSequence - 1];
};
// Do not edit below this line
module.exports = fibonacci;
//0,0,1,1,2,2
//1,1,2,3,5,8
