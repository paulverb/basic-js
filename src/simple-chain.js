const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  values : [],

  getLength() {
    return this.values.length;
    // remove line with error and write your code here
  },
  addLink( value ) {
    if (value === undefined) this.values.push(' ');
    else this.values.push(String(value));
    return this;
    // remove line with error and write your code here
  },
  removeLink( position ) {
    if (!Number.isInteger(position) || position > this.values.length || position < 1) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    else {
    this.values.splice(position - 1, 1);
    return this;
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.values.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = '( ' + this.values.join(' )~~( ') + ' )';
    this.values = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
