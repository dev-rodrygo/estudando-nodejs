//has()	Verifica se uma chave existe no Map.

const meuMap = new Map()
meuMap.set('nome', 'Lucas')
meuMap.set('idade', 40)

console.log(meuMap.has('nome')) // true
console.log(meuMap.has('cidade')) // false (chave não existe)
