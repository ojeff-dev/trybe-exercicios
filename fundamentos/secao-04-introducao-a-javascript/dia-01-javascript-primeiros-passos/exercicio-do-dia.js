/*
TÓPICO 1:
Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:  

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

// Resolução - Tópico 1:
let num1 = 8;
let num2 = 3;
const adicao = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num1 / num2;
const modulo = num1 % num2;

console.log('Adição: ' + adicao);
console.log('Subtração: ' + subtracao);
console.log('Multiplicação: ' + multiplicacao);
console.log('Divisão: ' + divisao);
console.log('Módulo: ' + modulo);

console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 2:
Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
*/

// Resolução - Tópico 2:
const valor1 = 10;
const valor2 = 15;

if (valor1 > valor2) {
  console.log(valor1 + ' É o maior valor!');
} else {
  console.log(valor2 + ' É o maior valor!');
}

console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 3:
Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
*/

// Resolução - Tópico 3:
const cedula1 = 2;
const cedula2 = 5;
const cedula3 = 10;

if(cedula1 > cedula2 && cedula1 > cedula3) {
  console.log(cedula1 + ' É a maior cédula.');
} else if(cedula2 > cedula1 && cedula2 > cedula3) {
  console.log(cedula2 + ' É a maior cédula');
} else {
  console.log(cedula3 + ' É a maior cédula');
}
console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 4:
Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
*/

// Resolução - Tópico 4:
let valorDigitado = 8;

let valorRecebido = valorDigitado;

if(valorRecebido > 0) {
  console.log(valorRecebido + ' É um número positivo');
} else if (valorRecebido < 0) {
  console.log(valorRecebido + ' É um número negativo');
} else if (valorRecebido !== Number) {
  console.log('Por favor, insira um número!')
}else {
  console.log(valorRecebido + ' É Zero');
}
console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 5:
🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

- Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo.
*/
const angulo1 = 90;
const angulo2 = 45;
const angulo3 = 45;
const somaDosAngulos = angulo1 + angulo2 + angulo3;

let souUmTriangulo;

if(somaDosAngulos === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  souUmTriangulo = true;
  console.log('Sou um triângulo? -> ' + souUmTriangulo + ' - A soma dos ângulos é igual a 180');
} else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
  console.log('ERRO! O(s) ângulo(s) pode(m) ser negativo(s), nem igual(is) a zero!');
} else if(somaDosAngulos < 180 || somaDosAngulos > 180) {
  souUmTriangulo = false;
  console.log('Sou um triângulo? -> ' + souUmTriangulo + ' - A soma dos ângulos é diferente de 180');
} else if(angulo1 != Number || angulo2 != Number || angulo3 != Number) {
  console.log('Os dados inseridos são inválidos!');
}
console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 6:
Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

- Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

-Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

// Resolução - Tópico 6:
let pecaDeXadrez = 'TORRE';

switch(pecaDeXadrez.toLowerCase()) {
  case 'king':
  case 'rei':
    console.log('horizontal, vertical e diagonal');
    break;

  case 'queen':
  case 'rainha':
    console.log('horizontal, vertical e diagonal');
    break;

  case 'bishop':
  case 'bishop':
    console.log('diagonal');
    break;

  case 'horse':
  case 'knight':
  case 'cavalo':
    console.log('horizontal <-> vertical - L');
    break;

  case 'rook':
  case 'castle':
  case 'torre':
    console.log('vertical ou horizontal');
    break;

  case 'pawn':
  case 'peão':
    console.log('frente');
    break;

  default:
    console.log('ERRO! Nome inválido!');
}
console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 7:
Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/
const nota = 96;

if(nota >= 90 && nota <= 100) {
  console.log('Conceito: A');
} else if(nota >= 80) {
  console.log('Conceito: B');
} else if(nota >= 70) {
  console.log('Conceito: C');
} else if(nota >= 60) {
  console.log('Conceito: D');
} else if(nota >= 50) {
  console.log('Conceito: E');
} else if(nota >= 0) {
  console.log('Conceito: F');
} else if(nota < 0 || nota > 100) {
  console.log('ERRO! O valor deve ser um número entre 0 e 100');
} else {
  console.log('Inválido!');
}
console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 8:
🚀 Há um par entre nós

Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

- Bonus: use somente um if.
*/
const firsNum = 11;
const secondNum = 21;
const thirdNum = 10;

let resultado = false;

if (firsNum % 2 === 0 || secondNum % 2 === 0 || thirdNum % 2 === 0) {
  resultado = true;
}

console.log(resultado);

console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 9:
🚀 Há um par entre nós

Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

- Bonus: use somente um if.
*/
const numA = 6;
const numB = 4;
const numC = 8;

let retorno = false;

if(numA % 2 !== 0 || numB % 2 !== 0 || numC % 2 !== 0) {
  retorno = true;
}
console.log(retorno);

console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 10:
🚀 Há um par entre nós

Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

- Atente que, sobre o custo do produto, incide um imposto de 20%.
- Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
- O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
  - valorCustoTotal = valorCusto + impostoSobreOCusto;
  - lucro = valorVenda - valorCustoTotal (lucro de um produto);
*/
const custoInicial = 2;
const precoVenda = 4;
let imposto = (20 / 100) * custoInicial;

if(custoInicial >= 0 && precoVenda >= 0) {

  const custoFinal = custoInicial + imposto;
  const lucro = (precoVenda - custoFinal) * 1000;
  console.log(lucro);

} else if(custoInicial < 0 || precoVenda < 0) {
  console.log('ERRO! Valor(es) menor que ZERO.');
} else {
  console.log('Não foi possível realizar o cálculo');
}
console.log('');
console.log('*********************************');
console.log('');
/* 
TÓPICO 11:
🚀 Há um par entre nós

Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

- A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
  - INSS (Instituto Nacional do Seguro Social):
    - Salário bruto até R$ 1.556,94: alíquota de 8%
    - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

  - IR (Imposto de Renda):
    - Até R$ 1.903,98: isento de imposto de renda
    - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

  - EXEMPLO: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
    - O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    - Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    - Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
      - R$ 2.670,00: salário com INSS já deduzido;
      - 7.5%: alíquota de imposto de renda;
      - R$ 142,80 parcela a se deduzir do imposto.
    - Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    - O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    - Resultado: R$ 2.612,55.

  - De olho na dica 👀: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/
let salarioBruto = 5000;
let aliquotaInss;
let aliquotaIR;

// Calcula o desconto do INSS
if(salarioBruto <= 1556.94 && salarioBruto >= 0){
  aliquotaInss = (8 / 100) * salarioBruto;
} else if(salarioBruto <= 2594.92) {
  aliquotaInss = (9 / 100) * salarioBruto;
} else if(salarioBruto <= 5189.82) {
  aliquotaInss = (11 / 100) * salarioBruto;
} else if(salarioBruto > 5189.82) {
  aliquotaInss = 570.88;
}

// Calcula o salário base
let salarioBase = salarioBruto - aliquotaInss;

// Calcula o desconto do IR
if( salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if(salarioBase <= 2826.65) {
  aliquotaIR = ((7.5 / 100) * salarioBase) - 142.80;;
} else if(salarioBase <= 3751.05) {
  aliquotaIR = ((15 / 100) * salarioBase) - 354.80;
} else if(salarioBase <= 4664.68) {
  aliquotaIR = ((22.5 / 100) * salarioBase) - 636.13;
} else if(salarioBase > 4664.68) {
  aliquotaIR = ((27.5 / 100) * salarioBase) - 869.36;
}

let totalDescontos = aliquotaInss + aliquotaIR;
let salarioLiquido = salarioBruto - totalDescontos;
console.log(salarioLiquido);
console.log('');
console.log('******************* FIM *******************');
console.log('');