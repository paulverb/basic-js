const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [];

  let previous = null;
  for (let i = 0; i < arr.length - 1;) {
    if (Number.isInteger(arr[i])) {
      result.push(arr[i]);
      previous = i;
      i++;
    }
    if (arr[i] === '--discard-prev' && previous !== null && arr[i-1]) {
        result.pop();
        previous = null;
        i++;
      }
    
    if (arr[i] === '--double-prev' && previous !== null) {
      result.push(previous);
      previous = null;
      i++;
    }

    if (arr[i] === '--discard-next') {
      i += 2;
      previous = null;
    }

    if (arr[i] === '--double-next' && arr[i+1]) {
      result.push(arr[i+1])
    }
  }
  return result;
}

module.exports = {
  transform
};
