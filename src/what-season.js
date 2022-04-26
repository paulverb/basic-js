const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {  
  
  if (!arguments.length) {return 'Unable to determine the time of year!'};
  
  let error = new Error('Invalid date!');
  

  try {
    const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 
                    'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

    // if (!(date instanceof Date)) {throw error;}
    let time = date.getTime();

    return seasons[date.getMonth()];
    }
    
  catch(e) {    
    throw error;
  }
  
}

module.exports = {
  getSeason
};
