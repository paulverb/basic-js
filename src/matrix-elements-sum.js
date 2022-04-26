const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let indexesOfZeros = new Set();
  let result = 0;

  matrix.forEach( arr => {
    arr.forEach((el, ind) => {
      if (el === 0) {indexesOfZeros.add(ind);}
      if (!indexesOfZeros.has(ind)) {result += el;}
    }
  )
  
  }  )
  return result;
}

module.exports = {
  getMatrixElementsSum
};
