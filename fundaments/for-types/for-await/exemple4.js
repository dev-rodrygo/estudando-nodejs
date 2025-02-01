// Consumindo uma API com for await...of

// Função assíncrona que simula a chamada de uma API
async function buscarUsuarios() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { nome: 'Alice', idade: 30 },
                { nome: 'Bob', idade: 25 },
                { nome: 'Carlos', idade: 35 },
            ])
        }, 1500)
    })
}

async function exemplo() {
    const usuarios = await buscarUsuarios()

    // Usando for await...of para iterar sobre a lista de usuários
    for await (let usuario of usuarios) {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`)
    }
}

exemplo()
