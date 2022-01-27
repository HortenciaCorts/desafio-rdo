import { useState } from 'react';
import { converterDecimalToRoman, converterRomanToDecimal, searchValueDecimal } from './converter';
import { arrayNumHundred, arrayNumOne, arrayNumTen, arrayNumThousand } from './numbers';
import './styles.css';

const Tarefa1 = () => {
    const [valueDecimal, setValueDecimal] = useState('');
    const [valueRoman, setValueRoman] = useState('');


    const handleDecimalToRoman = () => {
        const newValue = String(valueDecimal).split("");
        let resul = '';
        if (valueDecimal > 0 && valueDecimal <= 3999) {   
            resul = converterDecimalToRoman(newValue)         
            setValueRoman(resul);         
        } else {
            alert('Digite um valor válido');
            setValueRoman('');
            setValueDecimal('');
        }
    }


    const handleRomanToDecimal = () => {
        let resul = '';
        //orderar M DM CD DL XD VX IV
        resul = converterRomanToDecimal(valueRoman);
        
        setValueDecimal(resul)
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
                    Romano: <input type="text" value={valueRoman} onChange={e => setValueRoman(e.target.value.toUpperCase())} />
                </label>
                <button onClick={handleRomanToDecimal}>Converter para decimal</button>
            </div>

        </div>
    );
}

export default Tarefa1;