const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 500, 'Primeira')
})

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'Segunda')
})

Promise.race([promise1, promise2])
    .then((valor) => {
        console.log(valor) // "Segunda"
    })
    .catch((erro) => {
        console.error(erro)
    })
