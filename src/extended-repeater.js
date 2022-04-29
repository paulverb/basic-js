const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string'){
    str = String(str);
  }

  
  let addition = null;
  let separator;
  if (options.hasOwnProperty('separator')){
    separator = String(options.separator)
  } else {
    separator = '+';
  }
  let additionSeparator;
  if (options.hasOwnProperty('additionSeparator')){
    additionSeparator = String(options.additionSeparator)
  } else {
    additionSeparator = '|';
  }
  //let additionJoiner;



  if (options.hasOwnProperty('addition')) {
    addition = String(options.addition);
  } 

  if (options.addition && !options.repeatTimes && !options.additionRepeatTimes) {
    return str + addition
  }

  if (addition && options.additionRepeatTimes) {
    additionJoiner = Array(options.additionRepeatTimes).fill(addition).join(additionSeparator)
    if (options.repeatTimes) {
      return Array(options.repeatTimes).fill(str + additionJoiner).join(separator)
    }
    else {
      return str + additionJoiner
    }
  }
  
  

  if (addition && !options.additionRepeatTimes) {
    if(options.repeatTimes) {
      let strPlusAddition = str + addition;
      return Array(options.repeatTimes).fill(strPlusAddition).join(separator)
    } else {
      return str + addition;
    }
  }

  if (!addition) {
    if (options.repeatTimes){
      return Array(options.repeatTimes).fill(str).join(separator)
    } else {
      return str;
    }
      
  }
  
}

module.exports = {
  repeater
};
