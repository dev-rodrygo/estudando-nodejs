// Iterando sobre um gerador assíncrono

async function* geradorAssincrono() {
    yield new Promise((resolve) => setTimeout(() => resolve('Item 1'), 1000))
    yield new Promise((resolve) => setTimeout(() => resolve('Item 2'), 500))
    yield new Promise((resolve) => setTimeout(() => resolve('Item 3'), 1500))
}

async function exemplo() {
    for await (let item of geradorAssincrono()) {
        console.log(item)
    }
}

exemplo()
