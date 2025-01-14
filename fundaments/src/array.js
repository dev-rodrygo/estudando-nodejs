const numbers = [];
const numbersPar = [];
const numbersImpar = [];

function addNumbers(number) {
  for (let i = 0; i < number; i++) {
    numbers.push(i);

    const x = numbers[i];

    if (x % 2 === 0) {
      numbersPar.push(x);
    } else {
      numbersImpar.push(x);
    }
  }
}

addNumbers(100);
console.log(`\nNumeros: ${numbers}\n`);
console.log(`Numeros pares: ${numbersPar}\n`);
console.log(`Numeros impares: ${numbersImpar}`);
