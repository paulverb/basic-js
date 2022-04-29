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
  let controls = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);
  let nextDiscarded = false;

  for (let i = 0; i < arr.length; i++) {
    if(!(controls.has(arr[i]))) {
      result.push(arr[i])
    } else {
      if(arr[i] === '--discard-next') {
        if (arr.length > i + 1) {
          i++;
          nextDiscarded = true;
        }
      }
      if(arr[i] === '--discard-prev' && !nextDiscarded) {
        if (result.length) {
          result.pop();
          nextDiscarded = false;
        }
      }
      if (arr[i] === '--double-next' && arr.length > i+1) {
        result.push(arr[i+1]);
        nextDiscarded = false;
      }
      if (arr[i] === '--double-prev' && result.length && !nextDiscarded) {
        result.push(result[result.length - 1])
        nextDiscarded = false;
      }
    }
  }
  console.log('array:', arr, 'result:', result)
  return result;
}

module.exports = {
  transform
};
