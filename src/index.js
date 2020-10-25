const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let numbers = [];
    let morse = [];
    let result = '';

    for (let i = 0; i < expr.length / 10; i++) {
        numbers.push(+(expr.slice(i * 10, 10 + i * 10)) + '')
    }

    let newElem = '';
    numbers.forEach(elem => {
        newElem = '';

        if (elem === 'NaN') {
            newElem += " ";
        }

        for (let i = 0; i < elem.length; i++) {

            if (elem[i] + elem[i + 1] == 10) {
                newElem += '.';
            }
            if (elem[i] + elem[i + 1] == 11) {
                newElem += '-';
            }
            i++;
        }

        morse.push(newElem);
    });

    morse.forEach(elem => elem === ' ' ? result += elem : result += MORSE_TABLE[elem]);
    return result;
}

module.exports = {
    decode
}