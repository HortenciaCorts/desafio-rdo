import { useState } from 'react';
import { converterDecimalToRoman, converterRomanToDecimal } from './converter';
import { arrayNumHundred, arrayNumOne, arrayNumTen, arrayNumThousand } from './numbers';
import './styles.css';

const Tarefa1 = () => {
    const [valueDecimal, setValueDecimal] = useState('');
    const [valueRoman, setValueRoman] = useState('');
    

    const handleDecimalToRoman = () => {
        if (valueDecimal > 0 && valueDecimal <= 3999) {
            const newValue = valueDecimal.split("");
            let resul = '';

            if (newValue.length === 1) {
                resul = converterDecimalToRoman(arrayNumOne, newValue[0])
            }

            if (newValue.length === 2) {
                resul = converterDecimalToRoman(arrayNumTen, newValue[0])
                resul += converterDecimalToRoman(arrayNumOne, newValue[1])
            }

            if (newValue.length === 3) {
                resul = converterDecimalToRoman(arrayNumHundred, newValue[0])
                resul += converterDecimalToRoman(arrayNumTen, newValue[1])
                resul += converterDecimalToRoman(arrayNumOne, newValue[2])
            }

            if (newValue.length === 4) {
                resul = converterDecimalToRoman(arrayNumThousand, newValue[0])
                resul += converterDecimalToRoman(arrayNumHundred, newValue[1])
                resul += converterDecimalToRoman(arrayNumTen, newValue[2])
                resul += converterDecimalToRoman(arrayNumOne, newValue[3])
            }
            setValueRoman(resul)

        } else {
            alert('Digite um valor válido');
            setValueRoman('');
            setValueDecimal('');
        }
    }
    

    const handleRomanToDecimal = () => {

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