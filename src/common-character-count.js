const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const obj1 = {};
  const obj2 = {};
  s1.split('').forEach(letter => letter in obj1 ? obj1[letter]++ : obj1[letter] = 1 );
  s2.split('').forEach(letter => letter in obj2 ? obj2[letter]++ : obj2[letter] = 1 );
  Object.keys(obj1).forEach(key => key in obj2 ? result += Math.min(obj1[key], obj2[key]) : result += 0);
  return result;
}

module.exports = {
  getCommonCharacterCount
};
