//clear()	Remove todos os pares chave-valor do Map.

const meuMap = new Map()
meuMap.set('nome', 'João')
meuMap.set('idade', 30)

console.log(meuMap.size) // 2
meuMap.clear()
console.log(meuMap.size) // 0 (todos os itens foram removidos)
