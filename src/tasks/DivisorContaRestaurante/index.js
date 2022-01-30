import { useState } from "react";
import AddClient from "./components/AddClient";
import Products from "./components/Products";
import "./styles.css";

const DivisorContaRestaurante = () => {
    const [clientesNames, setClientesNames] = useState("");
    const [clientAndProduct, setClientAndProduct] = useState([]);
    const [addingFood, setAddingFood] = useState("");

    const handleAddCliente = (valueInput, payTax) => {
        const array = [...clientesNames];
        array.push([valueInput, payTax]);

        setClientesNames(array);
    };

    const handleClientAndProduct = (newArray) => {
        const array = [...clientAndProduct];
        const adding = [];
        
        array.push([newArray[0],newArray[1]])
        
        for (let i = 0; i < array.length; i++) {
            if (array[i][0][0] === newArray[0][0] && array[i][1][0] === newArray[1][0] && newArray[2] === false) {
                console.log('nao adiciona')
            } else {
                console.log('adiciona')
                adding.push([array[i][0], array[i][1]])

            }
        }
        console.log(adding)
        setClientAndProduct(adding)
    }

    const handleAddFood = (food, client) => {

    };
    return (
        <div className="containerTask2">
            <h2>Tarefa 3. Divisor de conta de restaurante</h2>
            <AddClient addNewClient={handleAddCliente} />
            <Products clients={clientesNames} addClientAndProduct={handleClientAndProduct} />

            <div>
                <h3>Pedidos</h3>
                {addingFood.length > 0 && addingFood.map((food, key) => (
                    <p>{food}

                        {clientesNames.length > 0 &&
                            clientesNames.map((client, key) => (
                                <p key={key}>
                                    <input type="checkbox" onChange={(e) => handleClientAndProduct([...client], [...food], e.target.checked)} />

                                    {client}
                                </p>
                            ))}
                        {/* <button onClick={}>Finalizar</button> */}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default DivisorContaRestaurante;
