//keys()	Retorna um iterador com todas as chaves.

const meuMap = new Map()
meuMap.set('nome', 'Fernanda')
meuMap.set('idade', 27)

for (const chave of meuMap.keys()) {
    console.log(chave)
}
// Saída:
// nome
// idade
