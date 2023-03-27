const fs = require('fs');

// Lendo o arquivo json
const jsonString = fs.readFileSync('dados.json');
const faturamento = JSON.parse(jsonString);

// Inicializando variáveis
let menorValor = Infinity;
let maiorValor = -Infinity;
let somaValores = 0;
let diasAcimaMedia = 0;

// Calculando as informações solicitadas
faturamento.forEach((dia) => {
  const valor = dia.valor;
  if (valor > maiorValor) {
    maiorValor = valor;
  }
  if (valor < menorValor) {
    menorValor = valor;
  }
  somaValores += valor;
});

const mediaMensal = somaValores / faturamento.length;

faturamento.forEach((dia) => {
  if (dia.valor > mediaMensal) {
    diasAcimaMedia++;
  }
});

// Imprimindo os resultados
console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Dias acima da média mensal: ${diasAcimaMedia}`);
