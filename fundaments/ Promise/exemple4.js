function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Primeira função concluída!')
        }, 1000)
    })
}

function segundaFuncao(mensagem) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensagem + ' Segunda função concluída!')
        }, 1000)
    })
}

primeiraFuncao()
    .then((resultado) => {
        return segundaFuncao(resultado)
    })
    .then((resultadoFinal) => {
        console.log(resultadoFinal) // "Primeira função concluída! Segunda função concluída!"
    })
    .catch((erro) => {
        console.error(erro)
    })
