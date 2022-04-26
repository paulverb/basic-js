const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let indexSet = new Set();
  let heightArray = [];
  let result = [];

  arr.forEach( (el, ind) => {
    if (el === -1) {indexSet.add(ind)}
    else {heightArray.push(el)}
  })

  heightArray.sort((a, b)=> a-b);
  let currentHeight = 0;
  arr.forEach((el, ind) => {
    if(el === -1) {result.push(-1)}
    else {
      result.push(heightArray[currentHeight]);
      currentHeight++;
    }
  })
  return result
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
