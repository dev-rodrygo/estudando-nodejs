//Iterando sobre as propriedades de um objeto

const pessoa = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo',
}

for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave])
}
