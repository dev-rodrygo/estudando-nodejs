//values()	Retorna um iterador com todos os valores

const meuMap = new Map()
meuMap.set('nome', 'Juliana')
meuMap.set('idade', 29)

for (const valor of meuMap.values()) {
    console.log(valor)
}
// Saída:
// Juliana
// 29
