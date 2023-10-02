const repeatString = function(string,num) {
    let repeatedString  = ''
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num; i++) {
           repeatedString+=string;    
    }
    return repeatedString;
};
let string = 'hey'
let num=3;
// Do not edit below this line
module.exports = repeatString;
