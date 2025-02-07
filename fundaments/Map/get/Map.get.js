//get()	Retorna o valor associado a uma chave.

const meuMap = new Map()
meuMap.set('nome', 'Pedro')
meuMap.set('idade', 35)

console.log(meuMap.get('nome')) // Pedro
console.log(meuMap.get('idade')) // 35
console.log(meuMap.get('cidade')) // undefined (chave não existe)
