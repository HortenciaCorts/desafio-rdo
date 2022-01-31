const Products = ({ clients, addClientAndProduct, finalizeOrder }) => {
    const foods = [
        ["Pizza P", 35],
        ["Pizza M", 42],
        ["Pizza G", 48],
        ["Porção de Peixe", 50],
        ["Tamaki", 20],
        ["Refrigerante", 8],
        ["Suco", 7]
    ];
    return (
        <div className="productsContainer">
            <h3>Produtos</h3>
            <table>
                <thead>
                    <tr>
                        <td>Produto</td>
                        <td>Valor</td>
                        <td>Consumidores</td>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food, key) => (
                        <tr key={key}>
                            <td>{food[0]}</td>
                            <td>R${food[1]},00</td>
                            <td>
                                {clients.length > 0 &&
                                    clients.map((client, key) => (
                                        <p key={key}>

                                            <input type="checkbox" onChange={(e) => addClientAndProduct([client, food, e.target.checked])} />
                                            {client}
                                        </p>
                                    ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={finalizeOrder}>
                Finalizar Pedido
            </button>
        </div>
    )
}

export default Products;