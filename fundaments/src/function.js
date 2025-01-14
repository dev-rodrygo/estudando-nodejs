class Alunos {
  constructor(nota1, nota2, nota3) {
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }

  calcularMedia() {
    const media = (this.nota1 + this.nota2 + this.nota3) / 3;

    return media;
  }
}

const rodry = new Alunos(6, 7, 9);

console.log(rodry.calcularMedia());
