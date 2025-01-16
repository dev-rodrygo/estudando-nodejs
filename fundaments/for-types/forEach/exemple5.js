//Exemplo 5: Filtrar elementos sem usar .filter (com condicional no forEach)

const numeros = [1, 2, 3, 4, 5, 6]
const pares = []

numeros.forEach((numero) => {
    if (numero % 2 === 0) {
        pares.push(numero)
    }
})

console.log(pares) // [2, 4, 6]
