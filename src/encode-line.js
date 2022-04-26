const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';

  let result = '';
  
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1] && count === 1) {
      result += str[i];
    }
    if (str[i] !== str[i+1] && count > 1) {
      result += count + str[i];
      count = 1;
    }
    if (str[i] === str[i+1]) {
      count++;
    }

  }

  return result;
}

module.exports = {
  encodeLine
};
