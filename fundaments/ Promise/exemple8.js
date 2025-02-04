async function randomNumber() {
    const randomNumber = Math.random() * 10
    return Math.floor(randomNumber)
}

async function main() {
    const numberRandom = await randomNumber()

    return new Promise((resolve, reject) => {
        if (numberRandom % 2 === 0) {
            resolve(`${numberRandom} e Par!`)
        } else if (numberRandom % 2 !== 0) {
            resolve(`${numberRandom} e Impar!`)
        } else {
            reject('error desconhecido!')
        }
    })
}
main()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
