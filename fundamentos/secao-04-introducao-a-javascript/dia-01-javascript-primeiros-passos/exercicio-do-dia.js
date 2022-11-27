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