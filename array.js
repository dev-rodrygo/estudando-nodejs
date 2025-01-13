let numbers = [];

function addNumbers(number) {
  for (let i = 0; i < number; i++) {
    numbers.push(i * 2);
  }
}
addNumbers(10);
console.log(numbers);
