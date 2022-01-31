import { useState } from 'react';
import './styles.css';

const ConverteNumbers = () => {
    const [valueDecimal, setValueDecimal] = useState('');
    const [valueRoman, setValueRoman] = useState('');

    const handleDecimalToRoman = () => {
        const arrayNumbers = [1000, 500, 100, 50, 10];
        const arrayRoman = ['M', 'D', 'C', 'L', 'X'];
        const arrayTenRoman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

        let result = '';
        let newvalue = valueDecimal;
        let repetedNumbers = 0;

        if (valueDecimal > 0 && valueDecimal < 3999) {
            for (let i = 0; i < arrayNumbers.length; i++) {
                repetedNumbers = parseInt(newvalue / arrayNumbers[i]);
                newvalue = valueDecimal % arrayNumbers[i];

                if (repetedNumbers > 0) {
                    for (let x = 0; x < repetedNumbers; x++) {
                        result += arrayRoman[i];
                    }
                }

                if (newvalue > 0 && newvalue < 10) {
                    result += arrayTenRoman[newvalue - 1];
                    break
                }
            }
            setValueRoman(result)
        } else {
            alert('Informe um valor válido (1 a 3999)');
            setValueDecimal('');
            setValueRoman('');
        }
    }

    const handleRomanToDecimal = () => {
        //orderar M DM CD DL XD VX IV
        const objectNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

        let result = 0;
        let previusDecimal = null;


        for (let i = valueRoman.length - 1; i >= 0; i--) {
            const char = valueRoman.charAt(i);
            for (let key in objectNumbers) {
                if (char === key) {
                    let decimal = parseInt(objectNumbers[key]);
                    if (previusDecimal !== null) {
                        if (decimal < previusDecimal) {
                            decimal = decimal * -1;
                        }
                    }
                    result += Number(decimal);
                    previusDecimal = decimal;
                }
            }
        }
        setValueDecimal(result);
    }

    return (
        <div className='containerTask'>
            <h2>Tarefa 1. Conversor de números romanos</h2>

            <div className='lineInput'>
                <label>
                    Decimal: <input type="number" value={valueDecimal} onChange={e => setValueDecimal(Math.round(e.target.value))} />
                </label>
                <button onClick={handleDecimalToRoman}>Converter para romano</button>
            </div>

            <div className='lineInput'>
                <label>
                    Romano: <input type="text" value={valueRoman} onChange={e => setValueRoman(e.target.value.toUpperCase())} />
                </label>
                <button onClick={handleRomanToDecimal}>Converter para decimal</button>
            </div>
        </div>
    )
}

export default ConverteNumbers;