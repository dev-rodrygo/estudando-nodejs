function simularRequisicao() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = { id: 1, nome: 'Exemplo' }
            const sucesso = false // Simula se a requisição foi bem-sucedida

            if (sucesso) {
                resolve(dados)
            } else {
                reject('Erro na requisição!')
            }
        }, 2000) // Simula um atraso de 2 segundos
    })
}

simularRequisicao()
    .then((dados) => {
        console.log('Dados recebidos:', dados) // { id: 1, nome: "Exemplo" }
    })
    .catch((erro) => {
        console.error(erro) // "Erro na requisição!"
    })
