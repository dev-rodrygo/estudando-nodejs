//Exemplo 3: Modificar os elementos de um array

const nomes = ['Ana', 'Carlos', 'Bianca']
const nomesMaiusculos = []

nomes.forEach((nome) => {
    nomesMaiusculos.push(nome.toUpperCase())
})

console.log(nomesMaiusculos)
