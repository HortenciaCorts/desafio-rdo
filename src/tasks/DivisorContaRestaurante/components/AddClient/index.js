import { useState } from "react";

const AddClient = ({addNewClient}) => {
    const [valueInput, setValueInput] = useState("");
    const [payTax, setPayTax] = useState(false);

    const handleAddCliente = () => {
        if(valueInput !== ''){
            addNewClient(valueInput, payTax);
    
            setValueInput("");
            setPayTax(false);
        }else{
            alert('Insira um nome')
        }
    }
    return (
        <div className="areaClient">
            <label>
                Nome:
                <input
                    type="text"
                    className="text"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                />
            </label>
            <label>
                <small>Pagar taxa de 10%</small>
                <input
                    type="checkbox" checked={payTax}
                    onChange={(e) => setPayTax(e.target.checked)}
                />
            </label>
            <button onClick={handleAddCliente}>Adicionar</button>
            {/* <ul>
                    {clientesNames.length > 0 &&
                        clientesNames.map((name, key) => <li key={key}>{name[0]}</li>)}
                </ul> */}
        </div>

    )
}

export default AddClient;