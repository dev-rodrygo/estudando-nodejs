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

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 Rolou um de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁Rodada ${round}`);

    // sortea bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //Rolar Dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //test Habilidade
    let totalSkill2 = 0;
    let totalSkill1 = 0;

    if (block === "RETA") {
      totalSkill1 = diceResult1 + character1.VELOCIDADE;
      totalSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "Velocidade",
        diceResult1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        "Velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }
    if (block === "CURVA") {
      totalSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "Manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      await logRollResult(
        character2.NOME,
        "Manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      await logRollResult(
        character1.NOME,
        "Confront",
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character1.NOME,
        "Confronto",
        diceResult2,
        character2.PODER
      );
    }

    if (totalSkill1 > totalSkill2) {
      console.log(`${character1.NOME} recebeu um ponto!`);
      totalSkill1++;
    } else {
      console.log(`${character2.NOME} recebeu um ponto!`);
      totalSkill2++;
    }

    console.log("🏁🚦-----------------------------🏁🚦\n");
  }
}

(async function main() {
  console.log(
    `🏁🚦Corrida entre ${player1.NOME} é ${player5.NOME} Começando...\n`
  );

  await playRaceEngine(player1, player2);
})();
