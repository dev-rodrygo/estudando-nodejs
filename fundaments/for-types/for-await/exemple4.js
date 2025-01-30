// Consumindo uma API com for await...of

// Função assíncrona que simula a chamada de uma API
async function buscarUsuarios() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { nome: 'Alice', idade: 30 },
        { nome: 'Bob', idade: 25 },
        { nome: 'Carlos', idade: 35 }
      ]);
    }, 1500);
  });
}

async function exemplo() {
  const usuarios = await buscarUsuarios();

  // Usando for await...of para iterar sobre a lista de usuários
  for await (let usuario of usuarios) {
    console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}`);
  }
}

exemplo();
Exemplo 5: Trabalhando com várias Promises em paralelo
Aqui, vamos usar Promise.all() para resolver várias Promises em paralelo e depois iterar sobre elas com for await...of.

javascript
Copiar
// Funções assíncronas simulando tarefas diferentes
function tarefa1() {
  return new Promise(resolve => setTimeout(() => resolve('Tarefa 1 Concluída'), 1000));
}

function tarefa2() {
  return new Promise(resolve => setTimeout(() => resolve('Tarefa 2 Concluída'), 500));
}

function tarefa3() {
  return new Promise(resolve => setTimeout(() => resolve('Tarefa 3 Concluída'), 1500));
}

async function exemplo() {
  const tarefas = [tarefa1(), tarefa2(), tarefa3()];

  // Usando Promise.all para aguardar todas as Promises
  const resultados = await Promise.all(tarefas);

  // Iterando sobre os resultados com for await...of
  for await (let resultado of resultados) {
    console.log(resultado);
  }
}

exemplo();