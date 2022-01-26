import { useState } from 'react';
import './styles.css';

const Tarefa1 = () => {
    const [valueDecimal, setValueDecimal] = useState('');
    const [valueRoman, setValueRoman] = useState('');
    const objNumOne = {
        1: [1, "I"],
        2: [2, "II"],
        3: [3, "III"],
        4: [4, "IV"],
        5: [5, "V"],
        6: [6, "VI"],
        7: [7, "VII"],
        8: [8, "VIII"],
        9: [9, "IX"],
    };
    const objNumTen = {
        1: [10, "X"],
        2: [20, "XX"],
        3: [30, "XXX"],
        4: [40, "XL"],
        5: [50, "L"],
        6: [60, "LX"],
        7: [70, "LXX"],
        8: [80, "LXXX"],
        9: [90, "XC"],
    };
    const objNumHundred = {
        1: [100, "C"],
        2: [200, "CC"],
        3: [300, "CCC"],
        4: [400, "CD"],
        5: [500, "D"],
        6: [600, "DC"],
        7: [700, "DCC"],
        8: [800, "DCCC"],
        9: [900, "CM"],
    };
    const objNumThousand = {
        1: [100, "M"],
        2: [200, "MM"],
        3: [300, "MMM"],
    };

    const transformDecimalToRoman = (array, index) => {
        for (let i = 1; i <= 9; i++) {
            if (index == i) {
                return (array[i][1]);
            }
        }

        if(index == 0){
            return ''
        }
    }

    const handleRomanToDecimal = () => {
        const newValue = valueRoman.split("");
        let resul = '';
        setValueDecimal(resul)
    }

    const handleDecimalToRoman = () => {
        if (valueDecimal > 0 && valueDecimal <= 3999) {
            const newValue = valueDecimal.split("");
            let resul = '';

            if (newValue.length === 1) {
                resul = transformDecimalToRoman(objNumOne, newValue[0])
            }

            if (newValue.length === 2) {
                resul = transformDecimalToRoman(objNumTen, newValue[0])
                resul += transformDecimalToRoman(objNumOne, newValue[1])
            }

            if (newValue.length === 3) {
                resul = transformDecimalToRoman(objNumHundred, newValue[0])
                resul += transformDecimalToRoman(objNumTen, newValue[1])
                resul += transformDecimalToRoman(objNumOne, newValue[2])
            }

            if (newValue.length === 4) {
                resul = transformDecimalToRoman(objNumThousand, newValue[0])
                resul += transformDecimalToRoman(objNumHundred, newValue[1])
                resul += transformDecimalToRoman(objNumTen, newValue[2])
                resul += transformDecimalToRoman(objNumOne, newValue[3])
            }
            setValueRoman(resul)

        } else {
            alert('Digite um valor válido');
            setValueRoman('');
            setValueDecimal('');
        }
    }

    return (
        <div className='containerTask'>
            <h2>Tarefa 1. Conversor de números romanos</h2>

            <div className='lineInput'>
                <label>
                    Decimal: <input type="number" value={valueDecimal} onChange={e => setValueDecimal(e.target.value)} />
                </label>
                <button onClick={handleDecimalToRoman}>Converter para romano</button>
            </div>

            <div className='lineInput'>
                <label>
                    Romano: <input type="text" value={valueRoman} onChange={e => setValueRoman(e.target.value)} />
                </label>
                <button onClick={handleRomanToDecimal}>Converter para decimal</button>
            </div>

        </div>
    );
}

export default Tarefa1;