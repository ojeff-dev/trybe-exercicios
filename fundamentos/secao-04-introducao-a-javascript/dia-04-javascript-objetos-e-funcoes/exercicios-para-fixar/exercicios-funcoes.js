/* 
TÓPICO 1:

Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
  - Adição (a + b)
  - Subtração (a - b)
  - Multiplicação (a * b)
  - Divisão (a / b)
  - Módulo (a % b)

*/

const a = 8;
const b = 4;

function adicao(){
  return a + b;
}
function subtracao(){
  return a - b;
}
function multiplicacao(){
  return a * b;
}
function divisao(){
  return a / b;
}
function modulo(){
  return a % b;
}
console.log(adicao(), subtracao(), multiplicacao(), divisao(), modulo());

console.log('');
console.log('****************************************');
console.log('');

/* 
TÓPICO 2:

Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

*/

const x = 9;
const y = 10;

function maiorNumero(){
  if(x > y){
    return x + ' é o maior número';
  } else{
    return y + ' é o maior número';
  }
}
console.log(maiorNumero());

console.log('');
console.log('****************************************');
console.log('');