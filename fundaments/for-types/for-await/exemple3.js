// Usando for await...of com uma função assíncrona que retorna dados

async function buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4]), 1000)
    })
}

async function exemplo() {
    const dados = await buscarDados()

    // Aqui não é assíncrono, mas vamos simular um processo assíncrono dentro do loop
    for await (let numero of dados) {
        console.log('Número:', numero)
    }
}

exemplo()
