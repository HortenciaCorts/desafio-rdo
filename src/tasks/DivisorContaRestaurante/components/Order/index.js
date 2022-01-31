import { useState } from "react";

const Order = ({ order, clients }) => {
    const foods = [
        ["Pizza P", 35],
        ["Pizza M", 42],
        ["Pizza G", 48],
        ["Porção de Peixe", 50],
        ["Tamaki", 20],
        ["Refrigerante", 4],
        ["Suco", 7]
    ];
    const [arrayClientAccount, setArrayClientAccount] = useState([])
    const handleAccount = () => {
        const array = []
        clients.forEach(name => {
            const arrayProducts = [];
            let total = 0;
            order.forEach(item => {
                item[1].clients.forEach(client => {
                    if (name[0] === client) {
                        let price = 0;
                        foods.forEach(food => {
                            if (item[0].product === food[0]) {
                                if (food[0] === 'Suco' || food[0] === 'Refrigerante') {
                                    price = food[1];
                                } else {
                                    price = food[1] / item[1].clients.length;
                                }
                            }
                        });
                        total += price;

                        arrayProducts.push([item[0].product, price])
                    }
                });
            });
            total = name[1] === true ? (total + (total / 10)) : total;
            array.push([
                { client: name },
                { products: arrayProducts },
                { total: total }
            ]);

            setArrayClientAccount(array)
        });
    };

    return (
        <div className="orderContainer">
            <div className="areaOrder">
                <h3>Pedidos</h3>
                {order.length > 0 && order.map((item, key) => (
                    <div className="order" key={key}>
                        {foods.map((food, key) => (food[0] === (item[0].product)) && (
                            <p key={key}>
                                {item[0].product} - R$ {food[1]},00

                                {item[1].clients.length > 0 &&
                                    item[1].clients.map((client, key) => (
                                        <li key={key}>
                                            {client}
                                        </li>
                                    ))}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={handleAccount}>Fechar Conta</button>
            <div className="account">
                <h3>Conta</h3>
                {arrayClientAccount.length > 0 && arrayClientAccount.map((account, key) => (
                    <div key={key}>
                        <p>Cliente: {account[0].client[0]}</p>
                        {account[1].products.map(product => (
                            <li>{product[0]} - R$ {product[1]},00</li>
                        ))}
                        <p>Valor Total: R$ {account[2].total}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order;