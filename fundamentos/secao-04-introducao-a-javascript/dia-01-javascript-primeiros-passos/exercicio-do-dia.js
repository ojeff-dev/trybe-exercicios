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
console.log('*********************************')
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
console.log('*********************************')
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
console.log('*********************************')
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
console.log('*********************************')
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
console.log('*********************************')
console.log('');