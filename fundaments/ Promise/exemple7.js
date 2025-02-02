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

async function executarOperacoes() {
    try {
        const resultado1 = await primeiraFuncao()
        console.log(resultado1) // "Primeira função concluída!"

        const resultado2 = await segundaFuncao(resultado1)
        console.log(resultado2) // "Primeira função concluída! Segunda função concluída!"
    } catch (erro) {
        console.error(erro)
    }
}

executarOperacoes()
