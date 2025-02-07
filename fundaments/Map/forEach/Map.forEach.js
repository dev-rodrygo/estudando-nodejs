//forEach()	Executa uma função para cada par chave-valor.

const meuMap = new Map()
meuMap.set('nome', 'Ana')
meuMap.set('idade', 22)

meuMap.forEach((valor, chave) => {
    console.log(`${chave} -> ${valor}`)
})
// Saída:
// nome -> Ana
// idade -> 22
