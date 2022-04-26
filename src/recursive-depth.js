const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
    if (Array.isArray(arr) && arr.length === 1) return 1;
    return Array.isArray(arr) ? 1 + Math.max(...arr.map(this.calculateDepth)) : 0;
  }
}

module.exports = {
  DepthCalculator
};
