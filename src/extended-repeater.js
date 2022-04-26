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
  let result = str;
  let addition = options.addition ? options.addition : '';
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  if(options.additionRepeatTimes) addition = addition.repeat(options.additionRepeatTimes).split('').join(additionSeparator);
  result += addition;
  if (options.repeatTimes) result = result.repeat(options.repeatTimes)

  if (options.addition) additionChunk += options.addition;
  if (options.additionSeparator) additionSep = options.additionSeparator;


  if (options.addition) chunk += options.addition;
  if (options.additionSeparator) chunk += options.a
}

module.exports = {
  repeater
};
