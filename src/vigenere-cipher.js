const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    if(type === false) {
      this.type = 'reverse';
    } else {this.type = 'direct'}   
    this._alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  _upperTwoWords(message, key) {
    return [message.toUpperCase(), key.toUpperCase()]
  }
  
  _makeLongKey(message, key) {
    [message, key] = this._upperTwoWords(message,key);
    let stupidKey = key.repeat(Math.ceil(message.length / key.length))
    let longKey = ''
    let keyInd = 0;
    
    [...message].forEach(char => {
      if (this._alphabet.includes(char)) {
        longKey += stupidKey[keyInd]
        keyInd++;
      } else {
        longKey += char}
    })
    return longKey
  }


  encrypt(message, key) {
    if(arguments.length !== 2 || typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    key = this._makeLongKey(message, key);
    message = message.toUpperCase();
    let encryptedText = '';

    for(let i = 0; i < message.length; i++) {
      if (this._alphabet.includes(message[i])){
        let alphabetIndex = (message[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
        let letter = this._alphabet[alphabetIndex];
        encryptedText += letter;
      } else {
        encryptedText += message[i];
      }
    }
    if(this.type === 'direct') {
      return encryptedText
    } else {
      return encryptedText.split('').reverse().join('');
    }

  }
  decrypt(encryptedMessage, key) {
    if(arguments.length !== 2 || typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    key = this._makeLongKey(encryptedMessage, key);
    let decrypted = '';
    for (let i = 0; i < encryptedMessage.length; i ++) {
      if (this._alphabet.includes(encryptedMessage[i])) {
        let alphabetIndex  = (encryptedMessage[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
        decrypted += this._alphabet[alphabetIndex]
      } else {
        decrypted += encryptedMessage[i];
      }
    } 

    if (this.type === 'direct') {
      return decrypted;
    } else {
      return decrypted.split('').reverse().join('');
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false)

console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) //=> 'AEIHQX SX DLLU!'
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) //=> '!ULLD XS XQHIEA'

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //'ATTACK AT DAWN!'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) //'!NWAD TA KCATTA'
