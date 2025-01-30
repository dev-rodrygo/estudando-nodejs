// Trabalhando com várias Promises em paralelo

// Funções assíncronas simulando tarefas diferentes
function tarefa1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve('Tarefa 1 Concluída'), 1000)
    )
}

function tarefa2() {
    return new Promise((resolve) =>
        setTimeout(() => resolve('Tarefa 2 Concluída'), 500)
    )
}

function tarefa3() {
    return new Promise((resolve) =>
        setTimeout(() => resolve('Tarefa 3 Concluída'), 1500)
    )
}

async function exemplo() {
    const tarefas = [tarefa1(), tarefa2(), tarefa3()]

    // Usando Promise.all para aguardar todas as Promises
    const resultados = await Promise.all(tarefas)

    // Iterando sobre os resultados com for await...of
    for await (let resultado of resultados) {
        console.log(resultado)
    }
}

exemplo()
