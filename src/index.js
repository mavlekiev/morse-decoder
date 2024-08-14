const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  // write your solution here
  let str = '';
  let strKey = '';
  
 
  for (let i = 0; i < expr.length; i++) {

    if (expr[i] === "1" && expr[i + 1] === "0") {
        strKey += ".";
        i += 1;
      } else if (expr[i] === "1" && expr[i + 1] === "1") {
        strKey += "-";
        i += 1;
      }
    if ((i+1) % 10 === 0) {
        str += MORSE_TABLE[strKey]; 
        strKey = '';
    }
    if (expr[i] === "*") {
        str += " ";
        i += 9;
      }
   

    /*
    while (expr[i] !== "*" || i < expr.length) {
      if (expr[i] === "1" && expr[i + 1] === "0") {
        strKey += ".";
      } else if (expr[i] === "1" && expr[i + 1] === "1") {
        strKey += "-";
      }
    }
    str += MORSE_TABLE[strKey]; 
    if (expr[i] === "*") {
        str += " ";
        i += 9;
      }
    */
  }
  return str;
}

module.exports = {
  decode,
};
