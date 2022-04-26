const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let count = 0
  matrix.forEach( arr => result.push([]));

  matrix.forEach( (array, arrayIndex) => {
    array.forEach( (bulean, buleanIndex) => {
      if(matrix[arrayIndex - 1]){
        if(matrix[arrayIndex - 1][buleanIndex - 1] === true) count++; }

      if(matrix[arrayIndex - 1]){
        if(matrix[arrayIndex - 1][buleanIndex] === true) count++; }

      if(matrix[arrayIndex - 1]){
        if(matrix[arrayIndex - 1][buleanIndex + 1] === true) count++; }

      if(matrix[arrayIndex + 1]){
        if(matrix[arrayIndex + 1][buleanIndex - 1] === true) count++; }

      if(matrix[arrayIndex + 1]){
        if(matrix[arrayIndex + 1][buleanIndex] === true) count++; }

      if(matrix[arrayIndex + 1]){
        if(matrix[arrayIndex + 1][buleanIndex + 1] === true) count++; }

      if(matrix[arrayIndex][buleanIndex - 1] === true) count++; 

      if(matrix[arrayIndex ][buleanIndex + 1] === true) count++; 

      result[arrayIndex].push(count);
      count = 0;

    })
  })
  return result;
}

module.exports = {
  minesweeper
};
