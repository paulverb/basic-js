const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// to finish
function getDNSStats(domains) {
  let result = {};
  
  for (let domain of domains) {
    let parts = domain.split('.').reverse();
    let partsWithDots = parts.map( part => '.' + part);
    for(let i = 1; i <= partsWithDots.length; i++) {
      let dns = partsWithDots.slice(0, i).join('');
      if (result.hasOwnProperty(dns)) {
        result[dns]++;
      } else {result[dns] = 1}
    }
  }
  return result;
}


module.exports = {
  getDNSStats
};
