import './styles.css';

const Tarefa1 = () => {

    return (
        <div className='containerTask'>
            <h2>Tarefa 1. Conversor de números romanos</h2>

            <div className='lineInput'>
                <label>
                    Decimal: <input type="number" />
                </label>
                <button>Converter para romano</button>
            </div>

            <div className='lineInput'>
                <label>
                    Romano: <input type="text" />
                </label>
                <button>Converter para decimal</button>
            </div>

        </div>
    )
}

export default Tarefa1;