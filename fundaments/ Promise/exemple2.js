const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = false // Simula uma operação bem-sucedida

    if (sucesso) {
        resolve('Operação bem-sucedida!')
    } else {
        reject('Algo deu errado!')
    }
})

minhaPromise
    .then((mensagem) => {
        console.log(mensagem) // "Operação bem-sucedida!"
    })
    .catch((erro) => {
        console.error(erro) // "Algo deu errado!"
    })
