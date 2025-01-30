async function nomes() {
    return new Promise((resolve) => {
        resolve([{ nome: 'rodry', idade: 29 }])
    })
}

async function exemplo() {
    const nome = await nomes()
    for (let element of nome) {
        console.log(`Usuario: ${element.nome}\nIdade: ${element.idade}`)
    }
}

exemplo()
