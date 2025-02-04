//delete()	Remove um par chave-valor específico.

const meuMap = new Map()
meuMap.set('nome', 'Maria')
meuMap.set('idade', 25)

console.log(meuMap.has('nome')) // true
meuMap.delete('nome')
console.log(meuMap.has('nome')) // false (o par chave-valor foi removido)
