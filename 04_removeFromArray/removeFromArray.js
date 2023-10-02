const removeFromArray = function (arr, ...removeNums) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let el = arr[i];
    for (const removeNum of removeNums) {
      if (el === removeNum) {
        arr.splice(i, 1);
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
