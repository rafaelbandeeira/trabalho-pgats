function calcularTotal(ferramentas, comprar) {
    let total = 0.00;
    let totalMatches = 0;

    if (ferramentas.length == 0 || comprar.length == 0)
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    else {
        for (let indexComprar = 0; indexComprar < comprar.length; indexComprar++) {
            for (let index = 0; index < ferramentas.length; index++) {
                if (ferramentas[index].nome == comprar[indexComprar]) {
                    total += ferramentas[index].preco;
                    totalMatches++;
                } else if (totalMatches < 1)
                    throw new Error("Nenhuma ferramenta desejada encontrada.");
            }
        }
    }

    return `O valor a pagar pelas ferramentas (${comprar[0]}, ${comprar[1]}) é R$ ${total.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}