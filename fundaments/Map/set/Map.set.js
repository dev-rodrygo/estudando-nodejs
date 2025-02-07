//set()	Adiciona ou atualiza um par chave-valor.

const meuMap = new Map()

meuMap.set('nome', 'Rafael')
meuMap.set('idade', 33)

console.log(meuMap.get('nome')) // Rafael
meuMap.set('nome', 'Rafaela') // Atualiza o valor da chave 'nome'
console.log(meuMap.get('nome')) // Rafaela
