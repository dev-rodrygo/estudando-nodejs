// Iterando sobre Promises com for await...of

const promessas = [
    new Promise((resolve) => setTimeout(() => resolve('Primeiro'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Segundo'), 2000)),
    new Promise((resolve) => setTimeout(() => resolve('Terceiro'), 3000)),
    new Promise((resolve) => setTimeout(() => resolve('Quarto'), 4000)),
]

async function exemplo() {
    for await (let resultado of promessas) {
        console.log(resultado)
    }
}

exemplo()
