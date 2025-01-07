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

      console.log(`${character1.NOME} confrontou com ${character2.NOME}🥊`);

      await logRollResult(
        character1.NOME,
        "Confronto",
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character1.NOME,
        "Confronto",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o comfronto! ${character2.NOME} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      }

      if (powerResult1 < powerResult2 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o comfronto! ${character1.NOME} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      }
      console.log(
        powerResult1 === powerResult2
          ? "Confronto empatado nunhum ponto foi perdido!"
          : ""
      );
    }

    if (totalSkill1 > totalSkill2) {
      console.log(`${character1.NOME} recebeu um ponto!`);
      character1.PONTOS++;
    } else if (totalSkill2 > totalSkill1) {
      console.log(`${character2.NOME} recebeu um ponto!`);
      character2.PONTOS++;
    }

    console.log("\n🏁🚦-----------------------------🏁🚦\n");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado Final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`${character1.NOME} venceu a corrida! Parabéns!`);
  else if (character1.PONTOS < character2.PONTOS)
    console.log(`${character2.NOME} venceu a corrida! Parabéns!`);
  else console.log("A corrida terminou em empate!");
}

(async function main() {
  console.log(
    `🏁🚦Corrida entre ${player1.NOME} é ${player2.NOME} Começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
