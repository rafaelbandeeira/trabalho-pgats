function calcularTotal(ferramentas, comprar) {
    let total = 0.00;
    const matches = [];

    if (ferramentas.length == 0 || comprar.length == 0)
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    else {
        for (let indexComprar = 0; indexComprar < comprar.length; indexComprar++) {
            for (let index = 0; index < ferramentas.length; index++) {
                if (ferramentas[index].nome == comprar[indexComprar]) {
                    total += ferramentas[index].preco;
                    matches[indexComprar] = comprar[indexComprar];
                } else if (matches.length < 1)
                    throw new Error("Nenhuma ferramenta desejada encontrada.");
            }
        }
    }

    return `O valor a pagar pelas ferramentas (${matches.join(", ")}) é R$ ${total.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}