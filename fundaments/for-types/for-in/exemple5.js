//Filtrando propriedades específicas em um objeto

const produto = {
    nome: 'Camiseta',
    preco: 39.9,
    estoque: 120,
    categoria: 'Vestuário',
}

for (const chave in produto) {
    if (typeof produto[chave] === 'string') {
        console.log(`${chave}: ${produto[chave]}`)
    }
}
