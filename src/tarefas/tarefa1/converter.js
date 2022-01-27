import { arrayNumHundred, arrayNumOne, arrayNumTen, arrayNumThousand } from './numbers';

export const converterDecimalToRoman= (valueDecimal) => {
    let resul = '';
    
    if (valueDecimal.length === 1) {
        resul = searchValueDecimal(arrayNumOne, valueDecimal[0])
    }

    if (valueDecimal.length === 2) {
        resul = searchValueDecimal(arrayNumTen, valueDecimal[0])
        resul += searchValueDecimal(arrayNumOne, valueDecimal[1])
    }

    if (valueDecimal.length === 3) {
        resul = searchValueDecimal(arrayNumHundred, valueDecimal[0])
        resul += searchValueDecimal(arrayNumTen, valueDecimal[1])
        resul += searchValueDecimal(arrayNumOne, valueDecimal[2])
    }

    if (valueDecimal.length === 4) {
        resul = searchValueDecimal(arrayNumThousand, valueDecimal[0])
        resul += searchValueDecimal(arrayNumHundred, valueDecimal[1])
        resul += searchValueDecimal(arrayNumTen, valueDecimal[2])
        resul += searchValueDecimal(arrayNumOne, valueDecimal[3])
    }

    return resul
}

export const searchValueDecimal = (array, index) => {
    for (let i = 0; i <= 9; i++) {
        if (index - 1 == i) {
            return (array[i][1]);
        }
    }

    if (index == 0) {
        return '';
    }
}

const searchValueRoman = (valueRoman) => {
    for (let i = 0; i < 9; i++) {
        if (arrayNumOne[i][1] === valueRoman) {
            console.log(arrayNumOne[i][0])
            return arrayNumOne[i][0];
        } else if (arrayNumTen[i][1] === valueRoman) {
            console.log(arrayNumTen[i][0])
            return arrayNumTen[i][0];
        } else if (arrayNumHundred[i][1] === valueRoman) {
            console.log(arrayNumHundred[i][0])
            return arrayNumHundred[i][0];
        } else if (i < 3 && arrayNumThousand[i][1] === valueRoman) {
            console.log(arrayNumThousand[i][0])
            return arrayNumThousand[i][0];
        }
    }
}

export const converterRomanToDecimal = (valueRoman) => {
    let valueDecimal = valueRoman;
    let subStringValue;
    let resul = 0;

    for (let i = 0; i < valueDecimal.length; i++) {
        if (valueDecimal.length >= 4) {
            subStringValue = valueDecimal.substring(0, 4)
            if (searchValueRoman(subStringValue) != undefined && searchValueRoman(subStringValue) != NaN) {
                resul += searchValueRoman(subStringValue);
                valueDecimal = valueDecimal.substring(4);
            }
        }
        if (valueDecimal.length >= 3) {
            subStringValue = valueDecimal.substring(0, 3)
            if (searchValueRoman(subStringValue) != undefined && searchValueRoman(subStringValue) != NaN) {
                resul += searchValueRoman(subStringValue);
                valueDecimal = valueDecimal.substring(3);
            }
        }
        if (valueDecimal.length >= 2) {
            subStringValue = valueDecimal.substring(0, 2)
            if (searchValueRoman(subStringValue) != undefined && searchValueRoman(subStringValue) != NaN) {
                resul += searchValueRoman(subStringValue);
                valueDecimal = valueDecimal.substring(2);
            }
        }
        if (valueDecimal.length >= 1) {
            subStringValue = valueDecimal.substring(0, 1)
            if (searchValueRoman(subStringValue) != undefined && searchValueRoman(subStringValue) != NaN) {
                resul += searchValueRoman(subStringValue);
                valueDecimal = valueDecimal.substring(1);
                i--;
            }
        }
    }
    return resul;
}