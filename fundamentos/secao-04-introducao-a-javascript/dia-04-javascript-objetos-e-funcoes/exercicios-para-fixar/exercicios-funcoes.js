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

function adicao(a, b){
  return a + b;
}
function subtracao(a, b){
  return a - b;
}
function multiplicacao(a, b){
  return a * b;
}
function divisao(a, b){
  return a / b;
}
function modulo(a, b){
  return a % b;
}
console.log(adicao(a, b), subtracao(a, b), multiplicacao(a, b), divisao(a, b), modulo(a, b));

console.log('');
console.log('****************************************');
console.log('');