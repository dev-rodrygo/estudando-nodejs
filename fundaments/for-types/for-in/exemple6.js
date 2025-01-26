//Iterando sobre um array de objetos com for-in

const alunos = [
    { nome: 'Lucas', idade: 21, nota: 8 },
    { nome: 'Ana', idade: 22, nota: 9 },
    { nome: 'Carlos', idade: 23, nota: 7 },
]

for (let indice in alunos) {
    const aluno = alunos[indice]
    console.log(`${aluno.nome} (idade: ${aluno.idade}) - Nota: ${aluno.nota}`)
}
