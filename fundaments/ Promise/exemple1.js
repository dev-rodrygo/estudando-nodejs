let promessa = new Promise((resolve, reject) => {
    let sucesso = true

    if (sucesso) {
        resolve('Deu certo! ✅')
    } else {
        reject('Algo deu errado. ❌')
    }
})

promessa
    .then((resultado) => console.log(resultado)) // Se der certo
    .catch((erro) => console.log(erro)) // Se der erro
