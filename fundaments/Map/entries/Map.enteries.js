//entries()	Retorna um iterador com os pares [chave, valor].

const meuMap = new Map()
meuMap.set('nome', 'Carlos')
meuMap.set('idade', 28)

for (const [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}
// Saída:
// nome: Carlos
// idade: 28
