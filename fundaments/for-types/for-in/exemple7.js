const funcionarios = [
    { nome: 'rodry', setor: 'corte' },
    { nome: 'rodrigo', setor: 'expedição' },
]

for (const funcionario in funcionarios) {
    const colaborador = funcionarios[funcionario]
    console.log(
        `Funcionario: ${colaborador.nome}\nSetor: ${colaborador.setor}\n`
    )
}
