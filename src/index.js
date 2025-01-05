const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Paech",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player3 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player4 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player5 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  const random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁Rodada ${round}`);

    // sortea bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //Rolar Dados
    let diceResult1 = rollDice();
    let diceResult2 = rollDice();

    //test Habilidade
    let totalSkill1 = 0;
    let totalSkill2 = 0;

    if (block === "RETA") {
      totalSkill1 = diceResult1 + character1.VELOCIDADE;
      totalSkill2 = diceResult2 + character2.VELOCIDADE;
    }
    if (block === "CURVA") {
    }
    if (block === "CONFRONTO") {
    }
  }
}

(async function main() {
  console.log(
    `🏁🚦Corrida entre ${player1.NOME} é ${player5.NOME} Começando...\n`
  );

  await playRaceEngine(player1, player2);
})();
