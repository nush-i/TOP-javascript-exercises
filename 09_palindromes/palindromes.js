const palindromes = function (string) {
    const char = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const newString =char.split('').reverse().join('');
    return char === newString;
   
};

// Do not edit below this line
module.exports = palindromes;
