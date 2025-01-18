const pedirPizza = new Promise((resolve, reject) => {
    console.log('Pedido feito! Aguardando a pizza...')

    setTimeout(() => {
        const sucesso = false // Simula se a pizza será entregue ou não.

        if (sucesso) {
            resolve('Pizza entregue!') // Se deu certo, a Promise é resolvida.
        } else {
            reject('Erro: A pizzaria não conseguiu entregar.') // Se deu errado, a Promise é rejeitada.
        }
    }, 3000) // Simula o tempo de espera (3 segundos).
})

// Consumindo a Promise
pedirPizza
    .then((mensagem) => {
        console.log(mensagem) // Quando a Promise for resolvida, este código é executado.
    })
    .catch((erro) => {
        console.error(erro) // Quando a Promise for rejeitada, este código é executado.
    })
