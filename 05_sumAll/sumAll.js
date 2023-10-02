const sumAll = function (startNumArg, endNumArg) {
  let start;
  let end;
  let finalResult = 0;
  if (typeof startNumArg !== 'number' ||startNumArg < 0  || typeof endNumArg !== 'number'|| endNumArg < 0  ) {
    return 'ERROR'
  }
  //*system for checking which number is bigger; probably is a better way to do this
  if (startNumArg > endNumArg) {
    start = endNumArg;
    end = startNumArg;
  } else {
    start = startNumArg;
    end = endNumArg;
  }
  for (let i = start; i <= end; i++) {
    finalResult += i;
  }
  return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
