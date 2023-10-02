const palindromes = function (string) {
    let regex =/[a-zA-Z0-9]*/g;
    let filteredArr = string.match(regex);
   let str = filteredArr.join('').toLowerCase();
    let reversedArr = str.split('').reverse();
    let reversedString = reversedArr.join('')
    if (reversedString === str) {
        return true;
    }else if (reversedString !== str){
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
