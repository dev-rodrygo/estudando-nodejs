async function listclientes() {
    return new Promise((resolve) => {
        resolve([
            { cliente: 'Maria', id: 1 },
            { cliente: 'Pedro', id: 2 },
            { cliente: 'Maria', id: 3 },
        ])
    })
}

async function listMyClentes() {
    let myclentes = await listclientes()

    for await (const element of myclentes) {
        console.log(`${element.cliente} e o cliente numero ${element.id}`)
    }
}

listMyClentes()
