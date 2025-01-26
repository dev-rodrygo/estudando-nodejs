//Iterando sobre as propriedades de objetos aninhados

const usuarios = {
    usuario1: {
        nome: 'Maria',
        idade: 30,
        endereco: { rua: 'Rua A', cidade: 'São Paulo' },
    },
    usuario2: {
        nome: 'José',
        idade: 25,
        endereco: { rua: 'Rua B', cidade: 'Rio de Janeiro' },
    },
}

for (let usuario in usuarios) {
    console.log(`Propriedades de ${usuario}:`)

    for (let chave in usuarios[usuario]) {
        console.log(`  ${chave}: ${usuarios[usuario][chave]}`)

        // Verificando se é um objeto dentro da propriedade
        if (typeof usuarios[usuario][chave] === 'object') {
            for (let chaveEndereco in usuarios[usuario][chave]) {
                console.log(
                    `    ${chaveEndereco}: ${usuarios[usuario][chave][chaveEndereco]}`
                )
            }
        }
    }
}
