const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));

let a = 0;
let b = 1;

let encontrado = false;

while (b <= numero) {
  if (b === numero) {
    encontrado = true;
    break;
  }
  
  const temp = b;
  b = a + b;
  a = temp;
}

if (encontrado) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
