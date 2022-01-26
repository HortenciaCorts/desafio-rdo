import { arrayNumHundred, arrayNumOne, arrayNumTen, arrayNumThousand } from './numbers';


export const converterDecimalToRoman = (array, index) => {
    for (let i = 0; i <= 9; i++) {
        if (index - 1 == i) {
            return (array[i][1]);
        }
    }

    if (index == 0) {
        return '';
    }
}

export const converterRomanToDecimal = (valueDecimal, valueRoman) => {
    
}