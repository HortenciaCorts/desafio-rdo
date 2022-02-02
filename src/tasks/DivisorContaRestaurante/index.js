import { useState } from "react";
import AddClient from "./components/AddClient";
import Order from "./components/Order";
import Products from "./components/Products";
import "./styles.css";

const DivisorContaRestaurante = () => {
    const [clientesNames, setClientesNames] = useState("");
    const [clientAndProduct, setClientAndProduct] = useState([]);
    const [order, setOrder] = useState("");

    const handleAddCliente = (valueInput, payTax) => {
        const array = [...clientesNames];
        array.push([valueInput, payTax]);

        setClientesNames(array);
    };

    const handleClientAndProduct = (newArray) => {
        const array = [...clientAndProduct];
        const adding = [];

        array.push([newArray[0], newArray[1]])

        for (let i = 0; i < array.length; i++) {
            if (array[i][0][0] === newArray[0][0] && array[i][1][0] === newArray[1][0] && newArray[2] === false) {
            } else {
                adding.push([array[i][0], array[i][1]])

            }
        }
        setClientAndProduct(adding)
    }

    const finalizeOrder = () => {
        let product = [];
        let pedido = []
        if (clientAndProduct != 0) {
            clientAndProduct.forEach((item) => {
                const exist = product.includes(item[1][0]) ? 'existe' : 'não existe';
                if (exist === 'não existe') {
                    product.push(item[1][0]);
                }
            });
            product.forEach(item => {
                const arrayClient = [];
                clientAndProduct.forEach(client => {
                    if (client[1][0] === item) {
                        arrayClient.push(client[0][0])
                    }
                });
                pedido.push([
                    { product: item },
                    { clients: arrayClient }
                ]);
            });
            setOrder(pedido);
        } else {
            alert('Adicione algum produto para continuar')
        }
    };
    return (
        <div className="containerTask3">
            <h2>Tarefa 3. Divisor de conta de restaurante</h2>
            <AddClient addNewClient={handleAddCliente} />
            <Products
                clients={clientesNames}
                addClientAndProduct={handleClientAndProduct}
                finalizeOrder={finalizeOrder} />
            <Order order={order} clients={clientesNames} />
        </div>
    );
};

export default DivisorContaRestaurante;
