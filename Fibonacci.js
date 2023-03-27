// solicita ao usuário um número para verificar se pertence à sequência de Fibonacci
const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));

// define as duas primeiras posições da sequência
let a = 0;
let b = 1;

// flag para indicar se o número foi encontrado na sequência
let encontrado = false;

// itera pela sequência de Fibonacci
while (b <= numero) {
  if (b === numero) {
    // o número foi encontrado na sequência
    encontrado = true;
    break;
  }
  
  // atualiza os valores das posições da sequência
  const temp = b;
  b = a + b;
  a = temp;
}

// exibe o resultado da busca na sequência
if (encontrado) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
